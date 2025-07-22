import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen"
      id="experience"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-ovo"
      >
        Work Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center max-w-4xl mx-auto mt-5 mb-12 font-ovo"
      >
        I'm passionate about creating beautiful, responsive websites that
        provide a great user experience uisng React.js and Next.js. On the back-end, I am proficient in
        Node.js, which enables me to build server-side applications using
        JavaScript. I have expertise in frameworks like Express.js, which helps
        me develop robust and scalable APIs. Additionally, I have worked with
        MongoDB, a NoSQL database, to efficiently store and retrieve data for
        web applications.{" "}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid grid-cols-auto gap-6 my-10 "
      >
        {serviceData.map(({ icon, title, description,description2, period }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 dark:hover:bg-dark-hover dark:hover:shadow-white"
          >
            {/* <Image src={icon} alt="icon" className="w-10" /> */}
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80 mt-3">
              {description2}
            </p>
            <p className="flex items-center gap-2 text-sm mt-5">
              {period}{" "}
              {/* <Image alt="arrow" src={assets.right_arrow} className="w-4" /> */}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
