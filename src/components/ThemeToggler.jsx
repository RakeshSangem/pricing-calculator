import { useState, useEffect } from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <button
        className="absolute top-4 right-4 rounded-full z-30"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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
          <path fill="gray" d="M0 0h48v48H0z" mask="url(#svgIDa)" />
        </svg>
      </button>
    </>
  );
};
export default ThemeToggler;
