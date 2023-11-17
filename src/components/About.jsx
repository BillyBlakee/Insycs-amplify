import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';


const About = () => {
  return (
   <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>About</p>
      <h2 className={styles.sectionHeadText}>Who We Are</h2>
    </motion.div>
    
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
     INSYCS strives to be an insurance campany of the people. We are looking to provide property insurance in states where traditional insurance companies are fleeing due to the inherint natural disaster risks. Insurance rates in many of these states are flying through the roof, and homes are one of the most important assets in everybodys life and need to be protected. We believe everyone should be able to protect their home at a fair price, and are dedicated to making insurance more affordable for all. We ask you to remain patient as we are working with lawmakers to find a solution.
    </motion.p>
   </>
  )
}

export default SectionWrapper(About, "about")