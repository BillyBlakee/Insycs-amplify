import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center md:space-x-4">
      <div className="flex flex-col w-full">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>About</p>
          <h2 className={styles.sectionHeadText}>Who We Are</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-text-color text-[17px] max-w-xl leading-[30px]"
        >
          INSYCS strives to be an insurance company for the people. We want to
          provide property insurance in states where traditional insurance
          companies are fleeing due to natural disaster risks. Insurance rates
          in many of these states are flying through the roof, and homes are
          essential assets in everybody's life and must be protected. Everyone
          should be able to defend their home at a fair price, which is why we
          have dedicated ourselves to making insurance more affordable for all.
        </motion.p>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="public/images/beach-house.svg"
          alt="hero"
          className="w-3/4 md:w-1/2 lg:w-auto"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
