import React from "react";
import { useNavigate } from "react-router-dom";

const Recieve = () => {
  const navigate = useNavigate();
  return (
    <section className="relative mx-auto max-w-[400px] pb-[100px] pt-[50px] px-6 bg-transparent min-h-screen flex flex-col justify-start items-start space-y-2">
      <h2 className="text-center leading-10 font-bold text-[32px] max-w-sm">
        Recieve
      </h2>
      <p className=" text-sm text-[#828282]">
        Select the applicable payment retrieval method
      </p>
      <div className="pt-[30px] w-full flex flex-col space-y-3">
        <div className="recieve-type">Generate Invoice</div>
        <div className="recieve-type">QR Code Scan</div>
        <div className="recieve-type">Share Wallet Address</div>
      </div>

      <div className="pt-[20px] w-full flex items-start flex-col space-y-2">
        <p className="text-center text-sm text-[#828282]">
          Your wallet information
        </p>

        <div className="flex bg-white border-none shadow text-gray-900 text-base  w-full  p-2 rounded space-x-1">
          <input
            type="text"
            className="flex-1 outline-none"
            placeholder="Wallet Address"
          />
          <span>@htb.com</span>
        </div>
      </div>
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

export default Recieve;
