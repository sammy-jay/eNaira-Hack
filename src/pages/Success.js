import React from "react";
import vector3 from "../assets/Vector-3.png";

const Success = () => {
  return (
    <section className="relative mx-auto max-w-[400px] pb-[100px] px-6 bg-white min-h-screen flex flex-col justify-center items-center space-y-6">
      
        <img src={vector3} className="" alt="vector3" />
       
      <h2 className="text-center leading-10 font-medium text-[24px] max-w-sm">
        Awesome
      </h2>
      <p className="text-center leading-10 font-thin text-[29px] max-w-sm">
        Your Account has been created successfully
      </p>
      <button
        type="button"
        className="text-white bg-[#1CBD5C] hover:bg-[#198645] focus:outline-none rounded shadow w-full sm:w-auto px-5 py-2 text-center font-bold text-sm"
        onClick={() => {}}
      >
        Get Started
      </button>
    </section>
  );
};

export default Success;
