import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="My Profile"
          className="rounded-full w-32"
        />
      </motion.div> */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
      >
        Hi! I'm Nihal Thakur{" "}
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{ rotate: [0, 15, -15, 0] }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image src={assets.hand_icon} alt="My Profile" className="w-7" />
        </motion.div>
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo mb-4"
      >
        Fullstack web developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-2xl mx-auto font-ovo"
      >
        I've spent the last 2 and half years building and scaling web applications for some pretty cool companies and individuals. I also create open source projects and contribute to the community. Lets connect!
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full flex items-center gap-2 bg-black text-white dark:bg-transparent"
        >
          Reach out{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          href="/Nihal_Thakur_Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
