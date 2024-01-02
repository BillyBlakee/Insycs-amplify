import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { solutions } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const SolutionsText = () => {
    return (
      <div className="mb-0">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-center tracking-wide mb-14`}>Problems In The Current Environment</h2>
          <div className="flex flex-row justify-around w-full text-center">
            <h2 className={`text-[#2e3440] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}>Home</h2>
            <h2 className={`text-[#2e3440] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}>Commercial</h2>
          </div>
        </motion.div>
  
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-text-color text-[17px] leading-[30px] grid grid-cols-2 gap-8"
        >
          <div>
            <p className={styles.sectionMidText}>
              Exorbitant Rise in Insurance Premiums
            </p>
            The notable rise in home insurance premiums is primarily driven by several factors, 
            including the increased frequency and severity of natural disasters, changes in local risk factors, 
            and rising rosts of repairs and rebuilding. Local changes in risk factors and regulatory shifts further 
            contribute to this upward trend in insurance costs. These combined elements lead to higher insurance 
            payouts, necessitating increased premiums to balance the heightened risk and expenses.
          </div>
  
          <div>
            <p className={styles.sectionMidText}>
            Carriers Leaving Crisis States
            </p>
            The withdrawal of insurance carriers from states facing crises, often due to natural disasters, 
            can have far-reaching implications. This typically occurs when insurers decide that operating 
            in certain areas is no longer viable or profitable. For residents of these "crisis states," this exodus can 
            lead to a significant reduction in available insurance options, often resulting in higher premiums due to 
            decreased competition.
          </div>
  
          <div>
            <p className={styles.sectionMidText}>
            Claims Protracted in Litigation or Unpaid
            </p>
            When claims are tied up in legal disputes, it often leads to lengthy and costly court proceedings, 
            delaying the settlement and creating financial strain for claimants awaiting compensation.
            Unpaid claims, on the other hand, contribute to the overall financial burden on the insurance sector,
            leading to higher premiums for all policyholders as companies seek to mitigate these risks and losses.
          </div>
  
          <div>
            <p className={styles.sectionMidText}>Scope of Coverage Shrinking</p>
            As insurers adjust their offerings to manage risks more effectively, many are limiting the breadth of 
            their coverage. This means that certain risks, once commonly covered, are now excluded or available only 
            at additional cost. For consumers, this trend results in policies that offer less comprehensive protection, 
            compelling them to either accept higher risk exposure or purchase supplemental coverage at extra expense.
          </div>
        </motion.div>
      </div>
    );
  };
  
  export default SectionWrapper(SolutionsText, "solutions");