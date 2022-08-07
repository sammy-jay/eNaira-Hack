import React from "react";
import { useNavigate } from 'react-router-dom';
import vector4 from "../assets/Vector-4.png";

const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <section className="pb-[60px] md:py-8 md:pt-[40px] md:px-6 bg-transparent min-h-screen flex flex-col justify-start items-center mx-auto space-y-[20px] max-w-[400px]">
      <div className="bg-[rgb(28,189,92)] flex flex-col p-[1.5rem] w-full rounded-br-[24px] rounded-bl-[24px] text-white ">
        <p className="text-[14px] uppercase font-thin text-gray-50">
          Welcome Back
        </p>
        <p className="text-xl font-bold">Jeremiah</p>
        <div className="rounded-md bg-[rgba(28, 189, 92, 1)] py-3 px-4 bg-gradient-to-r from-[#158A44] to-[#158A44] my-3 flex flex-col relative">
          <img
            src={vector4}
            alt="vector4"
            className="h-[60px] object-contain absolute  right-[25%] opacity-20"
          />

          <p className="text-[16px] font-thin text-gray-50">Your balance is</p>
          <div className="flex justify-between mt-3 items-center">
            <span className="text-[26px] font-bold">#213,304.45</span>
            <span className="cursor-pointer">Hide</span>
          </div>
        </div>
        {/* btns */}
        <div className="flex space-x-1 w-full">
          <button
            className="text-[#0B7428] shadow bg-[#D2F2DE] rounded text-center py-2 flex-1"
            onClick={() => navigate("/home/recieve")}
          >
            Recieve
          </button>
          <p className="bg-[rgba(28, 189, 92, 0.2)]"></p>
          <button
            className="text-[#f54545] shadow bg-[#FDDADA] rounded text-center py-2 flex-1"
            onClick={() => navigate("/home/transfer")}
          >
            Transfer
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between items-center px-[1.5rem]">
        <p className="text-[16px] font-semibold">Recent Transactions</p>
        <p className="text-[#828282] text-sm cursor-pointer">See All</p>
      </div>
      <div className="w-full p-[1.5rem] pt-0 bg-white overflow-y-scroll max-h-[320px] rounded-tr-[24px] rounded-tl-[24px] ">
        <p className="text-[14px] font-semibold my-3">7TH AUG 2022</p>

        {[...new Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex justify-between space-x-3 items-center my-3"
          >
            <div className="w-[40px] h-[40px] rounded-full bg-green-200" />
            <div className="flex-1">
              <p className=" text-[12px] text-[#828282]">Tranferred from</p>
              <p className=" text-[15px]">Blake Jason</p>
            </div>
            <p className="text-[#0B7428]">+ 500.00</p>
          </div>
        ))}
        <p className="text-[14px] font-semibold my-3">5TH AUG 2022</p>

        {[...new Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex justify-between space-x-2 items-center my-3"
          >
            <div className="w-[40px] h-[40px] rounded-full bg-green-200" />
            <div className="flex-1 space-y-1">
              <p className=" text-[12px] text-[#828282]">Tranferred to</p>
              <p className=" text-[15px]">John Doe</p>
            </div>
            <p className="text-[#f54545] ">- 1500.00</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
