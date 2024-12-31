"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import BurstBload from "./burst-bload";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex justify-center">
        <SectionHeading>👨‍💻 About Me</SectionHeading>
        <BurstBload />
      </div>
      <p>
      Hello, I'm Alfi Fikri Putra Saldan! I am passionate about enhancing my skills and knowledge in{" "}
        <span className="font-medium">web & application development,</span> particularly with a focus on PHP, Laravel, and CodeIgniter.
         I excel in building web applications and consistently aim to produce high-quality and efficient code while keeping up with the latest technological advancements.
      </p>
    </motion.section>
  );
}
