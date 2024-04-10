"use client";
import { ContactFormInput, ContactFormTextarea } from "./tags";
import Button from "./button";
import { useContactFormHandler } from "@/customHooks/useContactPage";

const ContactForm = () => {
  const {state, handleChange, handleSubmit} = useContactFormHandler()
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <ContactFormInput
        label="Your name"
        name="name"
        value={state.name}
        handleChange={handleChange}
        type="text"
      />
      <ContactFormInput
        label="Your email"
        name="email"
        value={state.email}
        handleChange={handleChange}
        type="email"
      />
      <ContactFormTextarea
        label="Your Message"
        name="message"
        value={state.message}
        handleChange={handleChange}
        type=""
      />
      <Button text="Message Me 😉" />
    </form>
  );
};

export default ContactForm;