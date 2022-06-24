import { IContactForm } from "modules";

/**
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
export default async function contact(req, res) {
  try {
    const response = await processEmailAsync(req.body);
    res.status(200).send();
  } catch (err) {
    console.log(err);
    console.log(err.message);
    res.status(500).send("Server error");
  }
}

const processEmailAsync = (form: IContactForm) => {
  const sendgrid = require("@sendgrid/mail");
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  sendgrid.setApiKey(SENDGRID_API_KEY);

  const msg = {
    to: "timeitel@outlook.com",
    from: process.env.OUTLOOK_USER,
    subject: `Email from SevenAprons.com: ${form.subject}`,
    text: `Name: ${form.name},\n Email: ${form.email} \n Message: ${form.message}`,
  };

  return sendgrid.send(msg);
};
