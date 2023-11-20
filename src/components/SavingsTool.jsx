import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

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
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="flex-[0.75] bg-white-100 p-8 rounded-2xl"
      >
        <h3 className="text-tertiary font-black md:text-[30px] sm:text-[20px] xs:text-[20px] text-[30px]">How much is your insurance company losing you?</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-secondary font-medium mb-4">Your Insurance Providor</span>
            <input
              type="text"
              name="insuranceCompany"
              value={form.insuranceCompany}
              onChange={handleChange}
              placeholder="What's your insurance providor?"
              className="bg-[#e5e9f0] py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-secondary font-medium mb-4">Your Monthly Payment</span>
            <input
              type="text"
              name="monthlyPayment"
              value={form.monthlyPayment}
              onChange={handleChange}
              placeholder="What's your monthly payment?"
              className="bg-[#e5e9f0] py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-secondary font-medium mb-4">Your Home Value</span>
            <input
              type="text"
              name="homeValue"
              value={form.homeValue}
              onChange={handleChange}
              placeholder="What's your home value?"
              className="bg-[#e5e9f0] py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-secondary font-medium mb-4">Your Zipcode</span>
            <textarea
              type="text"
              name="zipcode"
              value={form.zipcode}
              onChange={handleChange}
              placeholder="What's your zipcode?"
              className="bg-[#e5e9f0] py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"  
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-secondary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
      </motion.div>
    </div>
  )
}

export default SavingsTool