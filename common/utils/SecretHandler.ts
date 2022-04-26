import { SecretManagerServiceClient } from "@google-cloud/secret-manager";
const client = new SecretManagerServiceClient();

export const getSecret = async (versionName: string): Promise<any> => {
  const env =
    process.env.NODE_ENV === "production" ? "production" : "development";
  const [accessResponse] = await client.accessSecretVersion({
    name: `${versionName}/versions/latest`,
  });

  const responsePayload = accessResponse?.payload?.data?.toString();

  if (!responsePayload) {
    throw new Error("Secret undefined");
  }

  const jsonPayload = JSON.parse(responsePayload);
  const payload = jsonPayload[env];

  return payload;
};
