import React from "react";
import Header from "./components/Header";
import PricingCard from "./components/PricingCard";
import ThemeToggler from "./components/ThemeToggler";

const App = () => {
  return (
    <main
      className={
        "w-screeen h-screen bg-blue-200 grid place-items-center font-sans text-grayish-blue dark:bg-dark-desaturated-blue"
      }
    >
      <div className="bg-white rounded-md p-2 sm:pb-8 m-3 relative dark:bg-gray-900">
        <ThemeToggler />
        <Header />
        <PricingCard />
      </div>
    </main>
  );
};

export default App;
