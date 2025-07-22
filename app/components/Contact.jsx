import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e8312eac-53c4-478b-98c6-cd1d464c6d34");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-[length:90%_auto] dark:bg-none'
      id="contact"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-5xl font-ovo"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below. Have an idea to discuss? Shoot me an email if you want to connect. You can also find me on Linkedin or Twitter if that's more your speed.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-2xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            type="text"
            placeholder="Enter your Name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90"
            name="name"
          />
          <motion.input
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            type="email"
            placeholder="Enter your Email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90"
            name="email"
          />
        </div>

        <motion.textarea
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          rows="6"
          placeholder="Enter your Message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-dark-hover/30 dark:border-white/90"
          name="message"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Send Message
          <Image
            src={assets.right_arrow_white}
            alt="right arrow "
            className="w-4"
          />
        </motion.button>

        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
