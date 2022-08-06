import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Transfer = () => {
  const navigate = useNavigate();
  return (
    <section className="relative mx-auto max-w-[400px] pb-[100px] pt-[50px] px-6 bg-transparent min-h-screen flex flex-col justify-start items-start space-y-2">
      <h2 className="text-center leading-10 font-bold text-[32px] max-w-sm">
        Transfer
      </h2>
      <p className="text-center text-sm text-[#828282]">
        Send e-Naira to a private wallet owner or a bank account
      </p>
      <form className="w-full pt-8">
        <div className="mb-6">
          <input
            type="text"
            className="input-field"
            placeholder="Wallet Address"
          />
        </div>
        <div className="mb-6">
          <textarea
            name=""
            className="input-field"
            rows="3"
            placeholder="Payment Description"
          ></textarea>
          
        </div>
      </form>

      {/* Amount */}
      <div className="pt-[20px] w-full flex flex-col items-center space-y-[10px]">
        <p className="text-center text-sm text-[#828282]">Amount to Transfer</p>
        <h2 className="text-[26px] text-[#1CBD5C] font-bold">213,304.45</h2>
        <button
          type="button"
          className="text-white bg-[#1CBD5C] hover:bg-[#198645] focus:outline-none rounded shadow w-full sm:w-auto px-5 py-2 text-center font-bold text-sm"
          onClick={() => navigate("/verify")}
        >
          Send
        </button>
      </div>

      {/* Back btn */}
      <div className="flex space-x-5 w-full pt-[4rem] items-center">
        <button
          className="text-[#828282] shadow bg-transparent rounded text-center py-2  border border-[#828282] w-[80px]"
          onClick={() => navigate("/home")}
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default Transfer;
