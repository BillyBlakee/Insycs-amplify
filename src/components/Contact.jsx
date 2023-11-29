import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
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
    setLoading(true);

    emailjs.send(
      'service_clvfl7d',
      'template_xpwxebr',
      {
        from_name: form.name,
        to_name: 'Acuritas',
        from_email: form.email,
        to_email: 'team@acuritasconsulting.com',
        message: `${form.message} [We would like a budget range of ${form.budget}]`,
      },
      'rpK1cWylxbDtu_SY-'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. We will get back to you as soon as possible.');

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, (error) => {
      setLoading(false);

      console.log("Error");

      alert('Something went wrong. Please contact team@acuritasconsulting.com');
    })
  }

  return (
    <div className="xl:mt-12 flex flex-col xl:flex-row-reverse justify-center items-center gap-10">
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 flex justify-center items-center h-full"
      >
        <img
          src="public/images/house1.png"
          alt="hero"
          className="w-full max-w-lg"
        />
      </motion.div>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-white-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-text-color font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#e5e9f0] py-4 px-6 placeholder:text-text-color text-text-color rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-text-color font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[#e5e9f0] py-4 px-6 placeholder:text-text-color text-text-color rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-text-color font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              className="bg-[#e5e9f0] py-4 px-6 placeholder:text-text-color text-text-color rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-text-color rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact")