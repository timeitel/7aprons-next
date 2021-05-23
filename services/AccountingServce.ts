import { getSecret } from "../utils/SecretHandler";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { Order } from "types/Checkout";
import { getOrderStringFromLineItems } from "@utils/Ordering";
import { format } from "date-fns";

export const updateAccounting = async (order: Order) => {
  const {
    user: { name, company, deliveryAddress, email },
    line_items,
  } = order;
  const SA_SHEETS = await getSecret(
    "projects/1085191029669/secrets/sa-seven-aprons"
  );
  const doc = new GoogleSpreadsheet(SA_SHEETS.sheet_id);
  await doc.useServiceAccountAuth({
    client_email: SA_SHEETS.client_email,
    private_key: SA_SHEETS.private_key,
  });
  await doc.loadInfo();
  const sheet = doc.sheetsById[1242880030];

  const orderFormatted = await getOrderStringFromLineItems(line_items);

  const newOrder = {
    Date: format(new Date(), "dd MMM yyyy"),
    Name: name,
    Email: email,
    Company: company,
    "Delivery Address": deliveryAddress,
    Order: orderFormatted,
  };

  await sheet.addRow(newOrder);
};
