import ContactForm from "@/components/contactForm";
import ImageHelper from "@/components/imageHelper";
import email from "../../../public/images/email.png";
import Underliner from "@/components/underliner";

const Contact = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col md:flex-row justify-center items-center p-10 m-12 md:gap-4 gap-8">
        {/* pictorial end */}
        <div className="p-10 rounded-full bg-yellow-700 max-md:w-48">
          <ImageHelper src={email} alt="contact-image" />
        </div>
        {/* imaage end */}
        <div className="w-full">
          <h2 className="font-serif tracking-widest mb-5 dark:text-white">
            Thanks for reaching out! Let&rsquo;s Connect?
            <Underliner />
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
