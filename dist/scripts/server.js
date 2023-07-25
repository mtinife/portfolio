import express, { Request, Response } from "express";
import { Resend } from "resend";

const app = express();
const resend = new Resend('re_aNaz5Bn3_HpQx7piWgupvyuPWUzUNtYic');
const name = getInputValue('name');
const email = getInputValue('email');
const company = getInputValue('company');
const phone = getInputValue('phone');
const subject = getInputValue('subject');
const message = getInputValue('message');

function getInputValue(id) {
  return document.getElementById(id).value;
}

app.post("/", async (req: Request, res: Response) => {
  try {
    const data = await resend.emails.send({
      from: email,
      to: 'micahking2k@gmail.com',
      subject: "hello world",
      html: "<strong>it works!</strong>",
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
