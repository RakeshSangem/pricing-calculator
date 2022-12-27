import React from "react";
import Slider from "./components/Slider";
import Toggle from "./components/Toggle";
import { useState } from "react";

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

const App = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [isChecked, setIsChecked] = useState(0);

  function toggleDark() {
    if (JSON.parse(localStorage.getItem("isDark") || "false")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("isDark", "false");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("isDark", "true");
    }
  }

  return (
    <main className="w-screeen h-screen bg-blue-200 grid place-items-center font-sans text-grayish-blue dark:bg-dark-desaturated-blue">
      <div className="bg-white rounded-md p-2 sm:pb-8 m-3 relative dark:bg-gray-900">
        <button
          className="absolute top-4 right-4 rounded-full z-30"
          onClick={toggleDark}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.7em"
            height="1.7em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48"
          >
            <mask id="svgIDa">
              <g
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="4"
              >
                <path
                  fill="#fff"
                  stroke="#fff"
                  d="m24.003 4l5.27 5.27h9.457v9.456l5.27 5.27l-5.27 5.278v9.456h-9.456L24.004 44l-5.278-5.27H9.27v-9.456L4 23.997l5.27-5.27V9.27h9.456L24.003 4Z"
                />
                <path
                  fill="#000"
                  stroke="#000"
                  d="M27 17c0 8-5 9-10 9c0 4 6.5 8 12 4s2-13-2-13Z"
                />
              </g>
            </mask>
            <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#svgIDa)" />
          </svg>
        </button>
        <div className="relative text-center  sm:pb-10 py-12">
          <div className="absolute w-full h-full bg-circles bg-center -top-2 bg-no-repeat dark:opacity-20" />
          <h2 className="font-extrabold text-2xl text-dark-desaturated-blue py-4 dark:text-white/90">
            Simple, traffic-based pricing
          </h2>
          <p className="p-2 text-base dark:text-white/">
            Sign-up for our 30-day trail. No credit card required
          </p>
        </div>
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
          <Toggle
            checked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
          />
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
            <li class="flex items-center space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
            <li class="flex items-center space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
            <li class="flex items-center space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
      </div>
    </main>
  );
};

export default App;
