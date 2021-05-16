import { NextApiRequest, NextApiResponse } from "next";

/**
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
export default async function webhook(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await runWebhook(req, res);
  } catch (err) {
    console.log(JSON.stringify(err));
    res.status(500).send("Server error");
  }
}

const runWebhook = (req, res) => {
  res.status(200).json();
};
