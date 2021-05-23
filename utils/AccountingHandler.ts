import { getSecret } from "./SecretHandler";
import { GoogleSpreadsheet } from "google-spreadsheet";

export const updateAccounting = async (checkoutSession: string) => {
  const SA_SHEETS = await getSecret(
    "projects/1085191029669/secrets/sa-seven-aprons"
  );

  const doc = new GoogleSpreadsheet(SA_SHEETS.sheet_id);
  await doc.useServiceAccountAuth({
    client_email: SA_SHEETS.client_email,
    private_key: SA_SHEETS.private_key,
  });

  await doc.loadInfo();
  console.log(doc.title);
  await doc.updateProperties({ title: "renamed doc" });

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  console.log(sheet.title);
  console.log(sheet.rowCount);

  // adding / removing sheets
  const newSheet = await doc.addSheet({ title: "hot new sheet!" });
  await newSheet.delete();
};
