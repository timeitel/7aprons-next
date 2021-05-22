import { StorageService } from "./StorageHandler";

export const updateAccounting = async (checkoutSessionId: string) => {
  const file = await StorageService.find(checkoutSessionId);

  if (file?.error) {
    console.log(`Error finding file with id: ${checkoutSessionId}`);
  }

  console.log("hello");

  // access google sheet with file
};
