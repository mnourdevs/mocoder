import {Html, Heading, Text} from "@react-email/components"
import { EmailTemplateProps } from "@/utils/types";


export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => {
  return (
    <Html lang="en">
      <Heading as="h1">New Form Submission</Heading>
      <Text>You just submitted a form. Here are the details: </Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Message: {message}</Text>
    </Html>
  );
};
