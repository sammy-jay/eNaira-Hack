import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import vector from "../assets/Vector.png";
import vector1 from "../assets/Vector-1.png";
import vector2 from "../assets/Vector-2.png";

const data = [
  { id: 1, image: vector, header: "Asset Security guaranteed" },
  { id: 2, image: vector1, header: "Send and recieve payment seamlessly" },
  { id: 3, image: vector2, header: "Manage Multiple Assets" },
];

const Onboarding = () => {
    const navigate = useNavigate()
  const [index, setIndex] = useState(0);

  return (
    <section className=" py-8 pt-[40px] px-6 bg-white min-h-screen flex flex-col justify-start items-center mx-auto my-[2rem] space-y-[30px] max-w-[400px]">
      <div className="bg-[#1CBD5C14] p-8 rounded h-[289px] w-full flex justify-center items-center">
        <img src={data[index].image} alt="vector 1" />
      </div>
      <h2 className="text-center leading-10 font-bold text-[32px] max-w-sm">
        {data[index].header}
      </h2>
      <p className="text-sm leading-6 text-gray-600 text-[18px]">
        All asset types in one place
      </p>
      <div className="flex space-x-2">
        {data.map((d, dindex) => {
          if (dindex === index)
            return (
              <span
                key={dindex}
                className="h-[4px] w-[13px] rounded-full bg-[#4F4F4F] inline"
              />
            );
          else
            return (
              <span
                key={dindex}
                className="h-[4px] w-[8px] rounded-full bg-[#1CBD5C14] inline"
              />
            );
        })}
      </div>
      <div className="flex space-x-5 w-full">
        <button
          className="text-white shadow bg-black rounded text-center py-2 flex-1"
          onClick={() => {
            if (index < data.length - 1) return setIndex((i) => i + 1);
          }}
        >
          Next
        </button>
        <button
          className="text-black flex-1 shadow bg-white rounded text-center py-2"
          onClick={() => navigate("/auth")}
        >
          Skip
        </button>
      </div>
    </section>
  );
};

export default Onboarding;
