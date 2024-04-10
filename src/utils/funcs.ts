import { Resend } from "resend";
import { ReducerInitialType } from "./types";
import { EmailTemplate } from "@/components/email-template";

export const sendEmail = async ({
  name,
  email,
  message,
}: ReducerInitialType)=> {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: process.env.MY_EMAIL!,
    to: [email],
    subject: `Form Submission`,
    react: EmailTemplate({ name, email, message }),
  });

  if (error) throw error;

  return data;
};
