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
        className={`sm:px-16 px-6 absolute inset-0 top-[230px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`}
        initial="hidden"
        animate="visible"
        variants={div1Variants}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-hero-gradient" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            INSYCS <span className="text-[#74c0fc]">Insurance</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            The insurance company of the people{" "}
            <br className="sm:block hidden" />
            Providing insurance where it is inaccessible
          </p>
          <div className="mt-8 flex items-center justify-center sm:justify-start sm:space-x-8">
            <button className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-secondary rounded-xl">
              Get Started
            </button>
            <button className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-secondary rounded-xl">
              Learn More
            </button>
          </div>
        </div>

        {/* Div 2 */}
        <div className="md:max-w-[50%]">
          <img src="./images/amico.svg" alt="hero" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
