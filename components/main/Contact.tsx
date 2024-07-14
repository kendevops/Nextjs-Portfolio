import React from "react";
import ContactForm from "../sub/ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-screen h-screen bg-cover flex items-center justify-center z-50"
    >
      <div
        style={{ background: "url(atombg-comp.webp)" }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white"
      >
        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%] z-50">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
