import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Graph from "./Graph";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";


const SavingsTool = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    insuranceCompany: 'Select',
    monthlyPayment: '',
    homeValue: '',
    zipcode: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.insuranceCompany);
  }

  return (
    <div className="mt-12 bg-primary-complement rounded-[20px]">
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] bg-primary-complement rounded-2xl"
      >
        <div
          className={`bg-[#e5e9f0] rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <h3 className="text-center text-tertiary font-black text-[40px] md:text-[50px] sm:text-[20px] xs:text-[20px]">
            How much is your insurance company <br /> losing you?
          </h3>
        </div>

        <div className="px-10 py-3 flex-row flex">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8" // Adjust width and margin as needed
          >
            <label className="flex flex-col">
              <span className="text-text-color-light font-medium mb-4">
                Your Insurance Providor
              </span>
              <select
                name="budget"
                value={form.insuranceCompany}
                onChange={handleChange}
                className="bg-[#e5e9f0] py-4 px-6 text-text-color rounded-lg outlined-none border-none font-medium"
              >
                <option value="Allstate">Allstate</option>
                <option value="Nationwide">Nationwide</option>
                <option value="State Farm">State Farm</option>
                <option value="USAA">USAA</option>
                <option value="Farmers">Farmers</option>
              </select>
            </label>

            <label className="flex flex-col">
              <span className="text-text-color-light font-medium mb-4">
                Your Monthly Payment
              </span>
              <input
                type="text"
                name="monthlyPayment"
                value={form.monthlyPayment}
                onChange={handleChange}
                placeholder="What's your monthly payment?"
                className="bg-[#e5e9f0] py-4 px-6 placeholder:text-text-color text-text-color rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-text-color-light font-medium mb-4">
                Your Home Value
              </span>
              <input
                type="text"
                name="homeValue"
                value={form.homeValue}
                onChange={handleChange}
                placeholder="What's your home value?"
                className="bg-[#e5e9f0] py-4 px-6 placeholder:text-text-color text-text-color rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-text-color-light font-medium mb-4">
                Your Zipcode
              </span>
              <input
                type="text"
                name="zipcode"
                value={form.zipcode}
                onChange={handleChange}
                placeholder="What's your zipcode?"
                className="bg-[#e5e9f0] py-4 px-6 placeholder:text-text-color text-text-color rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-4 px-8 outline-none w-fit text-white font-bold shadow-md shadow-tertiary-complement rounded-xl"
            >
              {loading ? "Calculating..." : "Calculate"}
            </button>
          </form>

          {/* Display the graph here */}
          <div className="flex w-full flex-col justify-center items-center p-5">
            <Graph />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SectionWrapper(SavingsTool, "savingsTool")