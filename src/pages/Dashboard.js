import React from "react";
import vector4 from "../assets/Vector-4.png";

const Dashboard = () => {
  return (
    <section className=" py-8 pt-[40px] px-6 bg-white min-h-screen flex flex-col justify-start items-center mx-auto space-y-[30px] max-w-[400px]">
      <div className="bg-[rgb(28,189,92)] flex flex-col p-4 w-full rounded-br-[24px] rounded-bl-[24px] text-white ">
        <p className="text-[14px] uppercase font-thin text-gray-50">
          Welcome Back
        </p>
        <p className="text-xl font-bold">Jeremiah</p>
        <div className="rounded-md bg-[rgba(28, 189, 92, 1)] py-3 px-4 bg-gradient-to-r from-[#158A44] to-[#158A44] my-3 flex flex-col relative">
          <img
            src={vector4}
            alt="vector4"
            className="h-[60px] object-contain absolute  right-[25%] opacity-40"
          />
          <p className="text-[16px] font-thin text-gray-50">Your balance is</p>
          <div className="flex justify-between mt-2 items-center">
            <span className="text-[26px] font-bold">#213,304.45</span>
            <span className="cursor-pointer">Hide</span>
          </div>
        </div>
        {/* btns */}
        <div className="flex space-x-1 w-full">
          <button className="text-[#0B7428] shadow bg-[#D2F2DE] rounded text-center py-2 flex-1">
            Recieve
          </button>
          <p className="bg-[rgba(28, 189, 92, 0.2)]"></p>
          <button className="text-[rgba(245,69,69,1)] shadow bg-[#FDDADA] rounded text-center py-2 flex-1">
            Transfer
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
