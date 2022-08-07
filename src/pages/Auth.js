import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import vector4 from "../assets/Vector-4.png";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="relative mx-auto max-w-[400px] pb-[100px] pt-[20px] px-6 bg-transparent min-h-screen flex flex-col justify-start items-center space-y-3">
      <img src={vector4} alt="vector4" className="h-[100px] object-contain " />
      <h2 className="text-center leading-10 font-bold text-[32px] max-w-sm">
        {!isLogin ? "Let’s Create your Account" : "Login to your Account"}
      </h2>

      <form className="w-full pt-8">
        <div className="mb-6">
          <input type="text" className="input-field" placeholder="Username" />
        </div>
        {isLogin && (
          <div className="mb-6">
            <input
              type="password"
              className="input-field"
              placeholder="Password"
            />
          </div>
        )}
        {!isLogin && (
          <>
            {" "}
            <div className="mb-6">
              <input
                type="text"
                className="input-field"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-6">
              <input
                type="number"
                className="input-field"
                placeholder="Phone No"
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-[#1CBD5C]  rounded border border-gray-300 focus:ring-3 focus:bg-[#198645]"
                  required=""
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-600"
              >
                Have you read and agreed to this terms?
              </label>
            </div>
          </>
        )}
        <button
          type="button"
          className="text-white bg-[#1CBD5C] hover:bg-[#198645] focus:outline-none rounded shadow w-full sm:w-auto px-5 py-2 text-center font-bold text-sm"
          onClick={() => navigate("/verify")}
        >
          {isLogin ? "Login" : "Create Account"}
        </button>
      </form>

      <div className="w-full pt-[4rem] flex flex-col space-y-4">
        <p className="text-center text-sm">
          {isLogin ? "New User?" : "Already have an account?"}{" "}
        </p>
        <button
          className="text-gray-700 bg-white focus:outline-none rounded shadow w-full sm:w-auto px-5 py-2 text-center text-sm font-bold"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Create Account" : "Login"}
        </button>
        <p
          className="cursor-pointer text-center text-[#0B7428] text-sm font-bold"
          onClick={() => navigate("/merchantAuth")}
        >
          Register as Merchant →
        </p>
      </div>
    </section>
  );
};

export default CreateAccount;
