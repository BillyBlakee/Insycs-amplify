import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Graph from "./Graph";
import Alert from "./Alert";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

function calculateInsuranceData(companyName, monthlyPayment) {
  let expensePercentage, payoutPercentage;

  switch (companyName) {
    case "Chubb":
      expensePercentage = 0.244; // Replace with actual percentage for Chubb
      payoutPercentage = 0.64;  // Replace with actual percentage for Chubb
      break;
    case "Allstate":
      expensePercentage = 0.242; // Replace with actual percentage for Allstate
      payoutPercentage = 0.696;  // Replace with actual percentage for Allstate
      break;
    case "Progressive":
      expensePercentage = 0.294; // Replace with actual percentage for Progressive
      payoutPercentage = 0.588;  // Replace with actual percentage for Progressive
      break;
    case "AIG":
      expensePercentage = 0.309; // Replace with actual percentage for AIG
      payoutPercentage = 0.596;  // Replace with actual percentage for AIG
      break;
    default:
      // Default percentages if the company is not listed
      expensePercentage = 0.24;
      payoutPercentage = 0.69;
  }

  const companyExpenses = monthlyPayment * expensePercentage;
  const claimPayout = monthlyPayment * payoutPercentage;
  const companyProfit = monthlyPayment - (companyExpenses + claimPayout);

  return {
    companyExpenses,
    claimPayout,
    companyProfit,
  };
}

function cleanPaymentInput(input) {
  // Remove non-numeric characters
  const cleanedInput = input.replace(/[^0-9.]/g, '');
  return parseFloat(cleanedInput);
}

const SavingsTool = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    insuranceCompany: "Select",
    monthlyPayment: "",
    homeValue: "",
    zipcode: "",
  });

  const initialData = {
    companyExpenses: 50000,
    claimPayout: 30000,
    companyProfit: 20000,
  };

  // State to hold and update the graph data
  const [graphData, setGraphData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

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

    if (form.insuranceCompany == "Select") {
      console.log("You must choose an insurance providor. Please try again.");
      setShowError(true);
    }

    setGraphData(() => {
      const cleanedPayment = cleanPaymentInput(form.monthlyPayment)
      return calculateInsuranceData(form.insuranceCompany, cleanedPayment);
    });


    console.log(form.insuranceCompany);
  };

  return (
    <div className={`sm:px-16 px-6 sm:py-16 py-10 max-w-screen-xl mx-auto relative z-0`}>
      {" "}
      {/* Relative positioned container */}
      <div
        className="absolute inset-0 flex justify-center items-center z-10"
        style={{ display: showError ? "flex" : "none" }}
      >
        <Alert
          type="error"
          msg={"You must provide an insurance provider."}
          onClose={() => setShowError(false)}
        />
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] md:flex-[0.75] bg-primary-complement rounded-2xl"
      >
        <div className={`bg-[#e5e9f0] rounded-2xl ${styles.padding}`}>
          <h3 className="text-center text-tertiary font-black text-[40px] md:text-[40px] sm:text-[20px] xs:text-[20px]">
            Where does your insurance payment go?
          </h3>
        </div>

        <div className="px-5 md:px-10 py-3 flex-row flex">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex w-full md:w-1/2 flex-col justify-center items-left p-5 gap-6" // Adjust width and margin as needed
          >
            <label className="flex flex-col">
              <span className="text-text-color-light font-medium mb-4">
                Your Insurance Providor
              </span>
              <select
                name="insuranceCompany"
                value={form.insuranceCompany}
                onChange={handleChange}
                className="bg-[#e5e9f0] py-4 px-6 text-text-color rounded-lg outlined-none border-none font-medium select-hide-arrow"
              >
                <option value="Select">Select</option>
                <option value="Allstate">Allstate</option>
                <option value="Chubb">Chubb</option>
                <option value="Progressive">Progressive</option>
                <option value="AIG">AIG</option>
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
          <div className="flex w-full md:w-1/2 flex-col justify-center items-center p-5">
            <Graph data={graphData} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SavingsTool
