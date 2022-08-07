import React from "react";
import vector4 from "../assets/Vector-4.png";
import { useNavigate } from "react-router-dom";

const CreatePassword = () => {
  const navigate = useNavigate();
  return (
    <section className=" mx-auto max-w-[400px] pb-[100px] pt-[20px] px-6 bg-transparent min-h-screen flex flex-col justify-start items-center space-y-[20px]">
      <img src={vector4} alt="vector4" />
      <h2 className="text-center leading-10 font-bold text-[32px] max-w-sm">
        Let’s secure your Account
      </h2>
      <p className="uppercase text-sm leading-6 text-gray-600 text-[18px]">
        Create Password
      </p>
      <form className="w-full pt-5 flex flex-col space-y-4">
        <div className="">
          <input
            type="text"
            className="input-field"
            placeholder="New Password"
          />
        </div>
        <div className="">
          <input
            type="password"
            className="input-field "
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex justify-between items-center ">
          <span className="text-gray-600">Strength</span>
          <div className="flex space-x-2 items-center">
            {[1, 2, 3].map((x) => {
              return (
                <span
                  key={x}
                  className="h-[4px] w-[8px] rounded-full bg-[#1CBD5C14] inline"
                />
              );
            })}{" "}
            <span className="text-gray-600">Weak</span>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className=" text-sm leading-6 text-gray-600 text-[18px]">
            Password must contain
          </p>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="radio"
                value=""
                className=" w-4 h-4 text-[#1CBD5C]  rounded border border-gray-300 focus:ring-3 focus:ring-[#198645]"
                disabled
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm text-gray-900 dark:text-gray-600"
            >
              Upper and Lower Case Alphabets
            </label>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="radio"
                value=""
                disabled
                className=" w-4 h-4 text-[#1CBD5C]  rounded border border-gray-300 focus:ring-3 focus:ring-[#198645]"
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm text-gray-900 dark:text-gray-600"
            >
              Numbers
            </label>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="radio"
                value=""
                disabled
                className=" w-4 h-4 text-[#1CBD5C]  rounded border border-gray-300 focus:ring-3 focus:ring-[#198645]"
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm text-gray-900 dark:text-gray-600"
            >
              Symbols
            </label>
          </div>
        </div>
      </form>
      <button
        type="button"
        className="text-white bg-[#1CBD5C] hover:bg-[#198645] focus:outline-none rounded shadow w-full sm:w-auto px-5 py-2 text-center font-bold text-sm "
        onClick={() => navigate("/success")}
      >
        Proceed
      </button>
    </section>
  );
};

export default CreatePassword;
