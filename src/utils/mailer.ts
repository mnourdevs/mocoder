import { EmailTemplateProps } from "./types";
import nodemailer from "nodemailer";

const Email = process.env.EMAIL;
const password = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: Email,
    pass: password,
  },
});

export const sender = async ({name, message, email}:EmailTemplateProps) => {
  try {
    const response = await transporter.sendMail({
      from: Email,
      to: Email,
      subject: `Message From ${name}`,
      text: `dear ${name}| ${message}`,
      html: `<h1>${message}</h1> <p>${email}</p>`
    });
    console.log("Message sent successfully:", response.messageId);
    return response;
    
  } catch (error) {
    throw error;
  }
};
