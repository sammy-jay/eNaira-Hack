import React from "react";
import vector4 from "../assets/Vector-4.png";

import { useNavigate } from "react-router-dom";
const Verify = () => {
  const navigate = useNavigate();
  return (
    <section className="relative mx-auto max-w-[400px] pb-[100px] pt-[20px] px-6 bg-white min-h-screen flex flex-col justify-start items-center space-y-[20px]">
      <img src={vector4} alt="vector4" />
      <h2 className="text-center leading-10 font-bold text-[32px] max-w-sm">
        Verify your phone number
      </h2>
      <p className="text-sm leading-6 text-gray-600 text-[18px]">
        All asset types in one place
      </p>
      <h2 className="text-center leading-10 font-bold text-[26px] max-w-sm">
        +234 807 2232 222
      </h2>
      {/* Code here */}
      <p>to be completed...</p>
      <button
        type="button"
        className="text-white bg-[#1CBD5C] hover:bg-[#198645] focus:outline-none rounded shadow w-full sm:w-auto px-5 py-2 text-center font-bold text-sm"
        onClick={() => navigate("/createPassword")}
      >
        Verify
      </button>
    </section>
  );
};

export default Verify;
