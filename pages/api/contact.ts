import { ContactForm } from "modules";

/**
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
export default async function contact(req, res) {
  try {
    await processEmailAsync(req.body);
    res.status(200).send();
  } catch (err) {
    console.log(JSON.stringify(err));
    res.status(500).send("Server error");
  }
}

const processEmailAsync = (form: ContactForm) => {
  const sendgrid = require("@sendgrid/mail");
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  // sendgrid.setApiKey(SENDGRID_API_KEY);

  const msg = {
    to: "timeitel@outlook.com",
    from: form.email,
    subject: form.subject,
    text: form.message,
  };

  // return sendgrid.send(msg);
  return;
};
