"use client";

import React, { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_a6tbvql",
          "template_gr06va8",
          // process.env.NEXT_PUBLIC_SERVICE_ID as string,
          // process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          form.current,
          "WEJyPGcRq9PyGrLFD"
          // process.env.NEXT_PUBLIC_PUBLIC_KEY as string
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setIsSubmitted(true);
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    }
  };

  const handleOkClick = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="z-50">
      {isSubmitted ? (
        <div className="text-center text-white">
          <p className="text-2xl mb-5">
            Thanks for contacting me, I will surely read and respond.
          </p>
          <button
            onClick={handleOkClick}
            className="px-6 py-3 text-sm font-bold rounded-md text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 cursor-pointer"
          >
            Ok
          </button>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Your Message"
              name="message"
              className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
            />
          </div>
          <button
            type="submit"
            className="px-6 mb-5 py-3 text-sm font-bold rounded-md text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
