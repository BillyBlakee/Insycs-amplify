import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { insuranceDomainInfo } from "../constants";

const InsuranceCard = ({ index, text, title, insuranceType }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-8 rounded-3xl xs:w-[360px] lg:w-[480px] w-full text-center"
  >
    <p className="text-white font-black text-[32px]">{title}</p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[20px]">{text}</p>
    </div>
  </motion.div>
);

const HomeCommercialInfo = () => {
  const [insuranceType, setInsuranceType] = useState("Home");

  return (
    <div className={`mt-12 bg-primary-complement rounded-[20px]`}>
      <div
        className={`bg-[#e5e9f0] rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div
          variants={textVariant()}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div>
            <p className={styles.sectionSubText}>Why we care</p>
            <h2 className={styles.sectionHeadText}>Insurance Information.</h2>
          </div>
          <div className="flex border-b mt-4 md:mt-0">
            <button
              className={`py-3 px-6 text-xl text-primary-complement ${
                insuranceType === "Home"
                  ? "border-b-4 border-blue-500 font-medium"
                  : ""
              }`}
              onClick={() => setInsuranceType("Home")}
            >
              Home
            </button>
            <button
              className={`py-3 px-6 text-xl text-primary-complement ${
                insuranceType === "Commercial"
                  ? "border-b-4 border-blue-500 font-medium"
                  : ""
              }`}
              onClick={() => setInsuranceType("Commercial")}
            >
              Commercial
            </button>
          </div>
        </motion.div>
      </div>
      <div
        className={`sm:-mt-20 mt-5 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
      >
        {insuranceDomainInfo
          .filter((info) => info.insuranceType === insuranceType)
          .map((info, index) => (
            <InsuranceCard key={info.name} index={index} {...info} />
          ))}
      </div>
    </div>
  );
};

export default SectionWrapper(HomeCommercialInfo, "HomeCommercialInfo");
