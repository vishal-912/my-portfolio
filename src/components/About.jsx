// src/components/About.jsx
import React from "react";
import Tilt from "react-parallax-tilt"; // ✅ Modern replacement for react-tilt
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// ServiceCard Component
const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

// About Component
const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      Hi, I’m a 3rd-year Computer Science student and an aspiring software developer. I've been working with HTML, CSS, JavaScript, and frameworks like React, Node.js, and Three.js through projects and practice. I enjoy learning new technologies, solving problems, and building creative, user-friendly applications. I’m eager to grow my skills, collaborate on exciting projects, and gain real-world experience in the tech industry.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");
