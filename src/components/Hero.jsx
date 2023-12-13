import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const Hero = () => {
  // Animation Variants for Div 1
  const div1Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  // Animation Variants for Div 2
  const div2Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
  <section className="relative w-full h-screen mx-auto">
    <motion.div
      className={`sm:px-16 px-6 absolute inset-0 bottom-[20px] max-w-7xl mx-auto flex flex-row items-center gap-5 z-10 pointer-events-none`}
      initial="hidden"
      animate="visible"
      variants={div1Variants}
    >
      {/* Inner div 1 */}
      <div className="flex flex-col justify-center items-center mt-5 flex-grow">
        <div className="w-5 h-5 rounded-full bg-hero-gradient" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>

      {/* Inner div 2 */}
      <div className="flex-grow">
        <h1 className={`${styles.heroHeadText} text-white`}>
          INSYCS <span className="text-[#74c0fc]">Insurance</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          The insurance company of the people 
          <br className="sm:block hidden" />
          Providing insurance where it is inaccessible
        </p>
      </div>

      {/* Inner div 3 */}
      <div className="flex-grow md:max-w-[50%]">
        <img src="public/images/house2.png" alt="hero" />
      </div>
    </motion.div>
  </section>
);

};

export default Hero;
