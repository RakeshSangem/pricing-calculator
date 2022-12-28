import { useState } from "react";
import Slider from "./Slider";
import Toggle from "./Toggle";

const PLANS = [
  {
    pageviews: "10k",
    price: 8,
  },
  {
    pageviews: "50k",
    price: 12,
  },
  {
    pageviews: "100k",
    price: 16,
  },
  {
    pageviews: "500k",
    price: 24,
  },
  {
    pageviews: "1M",
    price: 36,
  },
];
const PricingCard = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [isChecked, setIsChecked] = useState(0);

  return (
    <>
      <div className="grid gap-6 text-center items-center sm:grid-cols-2 sm:gap-8">
        <h3 className="text-lg font-semibold dark:text-white/80">
          {PLANS[selectedPlan].pageviews} pageviews
        </h3>
        <div className="px-6 grid sm:order-1 sm:col-span-2 w-full">
          <Slider
            min="0"
            max="4"
            step="1"
            value={selectedPlan}
            onInput={(event) => setSelectedPlan(Number(event.target.value))}
          />
        </div>
        <div className="">
          <span className="text-4xl font-bold text-dark-desaturated-blue dark:text-slate-50">
            $
            {isChecked
              ? PLANS[selectedPlan].price * 0.75
              : PLANS[selectedPlan].price}
          </span>
          <span className="font-semibold">/month</span>
        </div>
      </div>
      <div className="px-2 py-6 sm:p-8 flex items-center justify-center gap-2 sm:text-base text-sm">
        <span>Mothly billing</span>
        <Toggle checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
        <span>Yearly Billing</span>
        <span
          className={
            "px-2 rounded-full text-red-500 text-sm font-semibold bg-red-100 border-2 border-red-200"
          }
        >
          25%<span className="hidden sm:inline-block"> discount</span>
        </span>
      </div>
      <div className="w-full p-8 flex justify-center items-center gap-6 flex-col sm:flex-row ">
        <ul className="text-center flex flex-col justify-center items-center sm:items-start">
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Unlimited Websites</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>100% data ownership</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Email reports</span>
          </li>
        </ul>
        <div>
          <button className=" px-8 py-2 font-semibold text-light-grayish-blue bg-dark-desaturated-blue  rounded-full">
            Start my trial
          </button>
        </div>
      </div>
    </>
  );
};
export default PricingCard;
