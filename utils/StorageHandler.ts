const storage = new Storage();
const bucketName = "seven_aprons_sessions";
const bucket = storage.bucket(bucketName);

export class StorageService {
  public static save = async (contents: {}, fileName: string) => {
    const file = bucket.file(fileName);
    await file.save(JSON.stringify(contents));

    console.log(
      JSON.stringify({
        message: "Storage object saved",
        location: `https://storage.cloud.google.com/${bucketName}/${fileName}`,
      })
    );
  };
}
