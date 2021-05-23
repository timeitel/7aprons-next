import { Storage } from "@google-cloud/storage";
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

  public static find = async (partialFileName: string): Promise<any> => {
    const prefix = `${process.env.NODE_ENV}`;
    const [fileObjects] = await bucket.getFiles({
      prefix,
    });

    const files = fileObjects
      .map((f) => f.name)
      .filter((f) => f.includes(partialFileName));

    if (files.length === 0) {
      console.log("Unable to find file");
      return { error: true };
    }

    const fileString = await readFile(files[0]);
    return JSON.parse(fileString);
  };
}

const readFile = async (fileName: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    let buf = "";
    bucket
      .file(fileName)
      .createReadStream()
      .on("data", (d: any) => (buf += d))
      .on("end", () => resolve(buf))
      .on("error", (e: any) => reject(e));
  });
};
