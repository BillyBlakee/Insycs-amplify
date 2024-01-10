import React, { useRef } from "react";
import { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { motion } from "framer-motion";
import PieChart from "./PieChart";
import BarGraph from "./BarGraph";
import Alert from "./Alert";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

function calculateInsuranceDataExternal(companyName, monthlyPayment) {
  let expensePercentage, payoutPercentage;

  switch (companyName) {
    case "Chubb":
      expensePercentage = 0.244; // Replace with actual percentage for Chubb
      payoutPercentage = 0.64; // Replace with actual percentage for Chubb
      break;
    case "Allstate":
      expensePercentage = 0.242; // Replace with actual percentage for Allstate
      payoutPercentage = 0.696; // Replace with actual percentage for Allstate
      break;
    case "Progressive":
      expensePercentage = 0.294; // Replace with actual percentage for Progressive
      payoutPercentage = 0.588; // Replace with actual percentage for Progressive
      break;
    case "AIG":
      expensePercentage = 0.309; // Replace with actual percentage for AIG
      payoutPercentage = 0.596; // Replace with actual percentage for AIG
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

function calculateInsuranceDataINSYCS(companyName, monthlyPayment) {
  const companyExpenses = monthlyPayment * 0.005;
  const claimPayout = monthlyPayment * 0.995;
  const companyProfit = 0.0;

  return {
    companyExpenses,
    claimPayout,
    companyProfit,
  };
}

function cleanPaymentInput(input) {
  // Remove non-numeric characters
  const cleanedInput = input.replace(/[^0-9.]/g, "");
  return parseFloat(cleanedInput);
}

const SavingsTool = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    insuranceMarket: "Select",
    insuranceCompany: "Select",
    monthlyPayment: "",
  });

  const initialData = {
    companyExpenses: 50000,
    claimPayout: 30000,
    companyProfit: 20000,
  };

  // State to hold and update the graph data
  const [graphDataExternal, setGraphDataExternal] = useState(initialData);
  const [graphDataINSYCS, setGraphDataINSYCS] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [isFormCollapsed, setIsFormCollapsed] = useState(false);
  const [periodData, setPeriodData] = useState([]);

  const formVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, duration: 0.5 },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 1,
        ease: "easeOut",
      },
    },
  };

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

    setIsFormCollapsed(true);

    if (form.insuranceCompany == "Select") {
      console.log("You must choose an insurance providor. Please try again.");
      setShowError(true);
    }

    setGraphDataExternal(() => {
      const cleanedPayment = cleanPaymentInput(form.monthlyPayment);
      return calculateInsuranceDataExternal(
        form.insuranceCompany,
        cleanedPayment
      );
    });

    setGraphDataINSYCS(() => {
      const cleanedPayment = cleanPaymentInput(form.monthlyPayment);
      return calculateInsuranceDataINSYCS(
        form.insuranceCompany,
        cleanedPayment
      );
    });

    setPeriodData(() => {
      return Array.from(
        { length: 120 },
        (_, i) => form.monthlyPayment * (1 + 0.00911) ** (i + 1)
      );
    });

    console.log(form.insuranceCompany);
  };

  return (
    <div className={`py-10 mx-auto relative z-0`}>
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
        className="flex flex-col flex-[0.5] lg:flex-[0.75] bg-primary-complement rounded-2xl"
      >
        <div className={`bg-[#e5e9f0] rounded-2xl ${styles.padding}`}>
          <h3 className="text-center text-tertiary font-black text-[40px] lg:text-[40px] sm:text-[30px] xs:text-[20px]">
            Where does your insurance payment go?
          </h3>
        </div>
        <div className="px-5 lg:px-5 py-3 flex flex-col lg:flex-row w-full">
          <div className="flex items-center">
            {isFormCollapsed ? (
              <FaCaretRight
                size={30}
                onClick={() => setIsFormCollapsed(false)}
              />
            ) : (
              <FaCaretLeft size={30} onClick={() => setIsFormCollapsed(true)} />
            )}
          </div>
          {/* Form Section */}
          {!isFormCollapsed && (
            <motion.div
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex w-full lg:w-1/3 flex-col justify-center items-left p-5 gap-6"
              variants={formVariants}
              initial="closed"
              animate={isFormCollapsed ? "closed" : "open"}
            >
              <form className="flex flex-col">
                <label className="flex flex-col">
                  <span className="text-text-color-light font-medium mb-4">
                    Your Insurance Market
                  </span>
                  <select
                    name="insuranceMarket"
                    value={form.insuranceMarket}
                    onChange={handleChange}
                    className="bg-[#e5e9f0] py-4 px-6 text-text-color rounded-lg outlined-none border-none font-medium select-hide-arrow"
                  >
                    <option value="Select">Select</option>
                    <option value="Home">Home</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </label>
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
                <div className="flex justify-center pt-10">
                  <button
                    type="submit"
                    className="bg-tertiary py-4 px-8 outline-none w-fit text-white font-bold shadow-md shadow-tertiary-complement rounded-xl"
                  >
                    {loading ? "Calculating..." : "Calculate"}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Graph Section */}
          <div className="px-5 lg:px-5 py-3 flex flex-col lg:flex-row w-full">
            {isFormCollapsed ? (
              /* When the form is collapsed, the graphs should be smaller and evenly spaced. */
              <div className="flex flex-row justify-around items-center w-full">
                <div className="flex-1 text-center mx-2">
                  <h2 className="text-2xl font-bold mb-4">
                    Your Current Provider
                  </h2>
                  {/* Wrap the chart in a div with padding to control size */}
                  <div className="p-4">
                    <PieChart data={graphDataExternal} />
                  </div>
                </div>
                <div className="flex-1 text-center mx-2">
                  <h2 className="text-2xl font-bold mb-4">INSYCS</h2>
                  <div className="p-4">
                    <PieChart data={graphDataINSYCS} />
                  </div>
                </div>
                <div className="flex-1 text-center mx-2">
                  <h2 className="text-2xl font-bold mb-4">
                    Compounding Interest
                  </h2>
                  <div className="p-4">
                    <BarGraph periodData={periodData} />
                  </div>
                </div>
              </div>
            ) : (
              /* Code for when the form is not collapsed, now with even spacing and smaller graphs */
              <div className="flex flex-row justify-around items-center w-full">
                <div className="text-center mx-2">
                  <h2 className="text-2xl font-bold mb-4">
                    {form.insuranceCompany === "Select"
                      ? "Your Current Provider"
                      : form.insuranceCompany}
                  </h2>
                  {/* Wrap the chart in a div with padding to control size */}
                  <div className="p-4">
                    <PieChart data={graphDataExternal} />
                  </div>
                </div>
                <div className="text-center mx-2">
                  <h2 className="text-2xl font-bold mb-4">INSYCS</h2>
                  <div className="p-4">
                    <PieChart data={graphDataINSYCS} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(SavingsTool, "SavingsTool");
