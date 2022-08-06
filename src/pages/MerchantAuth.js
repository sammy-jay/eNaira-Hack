import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const MerchantAuth = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  return (
    <section className="relative mx-auto max-w-[400px] pb-[100px] pt-[50px] px-6 bg-transparent min-h-screen flex flex-col justify-start items-start space-y-2">
      {index === 0 && (
        <>
          <p className="text-sm">MERCHANT ACCCOUNT</p>
          <h2 className="leading-10 font-bold text-[32px] max-w-sm">
            Personal Information
          </h2>

          <form className="w-full pt-8">
            <div className="mb-6">
              <input
                type="text"
                className="input-field"
                placeholder="First Name"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                className="input-field"
                placeholder="Middle Name"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                className="input-field"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-6">
              <input
                type="number"
                className="input-field"
                placeholder="Phone No"
              />
            </div>
          </form>

          <div className="flex space-x-5 w-full pt-[4rem] items-center">
            <div className="flex flex-1 space-x-2">
              {[0,1,2].map((d) => {
                if (d === index)
                  return (
                    <span
                      key={d}
                      className="h-[4px] w-[13px] rounded-full bg-[#4F4F4F] inline"
                    />
                  );
                else
                  return (
                    <span
                      key={d}
                      className="h-[4px] w-[8px] rounded-full bg-[#1CBD5C14] inline"
                    />
                  );
              })}
            </div>

            <button
              className="text-white flex-1 shadow bg-[#1CBD5C] rounded text-center py-2"
              onClick={() => setIndex((i) => i + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
      {index === 1 && (
        <>
          <p className=" text-sm ">MERCHANT ACCCOUNT</p>
          <h2 className="leading-10 font-bold text-[32px] max-w-sm">
            Business Information
          </h2>

          <form className="w-full pt-8">
            <div className="mb-6">
              <input
                type="text"
                className="input-field"
                placeholder="Business Name"
              />
            </div>
            <div className="mb-6">
              <input type="number" className="input-field" placeholder="BVN" />
            </div>
            <div className="mb-6">
              <input type="number" className="input-field" placeholder="NIN" />
            </div>
            <div className="mb-6">
              <input
                type="number"
                className="input-field"
                placeholder="Tax Payer Identification"
              />
            </div>
          </form>

          <div className="flex space-x-5 w-full pt-[4rem] items-center">
            <div className="flex space-x-2">
              {[0,1,2].map((d) => {
                if (d === index)
                  return (
                    <span
                      key={d}
                      className="h-[4px] w-[13px] rounded-full bg-[#4F4F4F] inline"
                    />
                  );
                else
                  return (
                    <span
                      key={d}
                      className="h-[4px] w-[8px] rounded-full bg-[#1CBD5C14] inline"
                    />
                  );
              })}
            </div>
            <button
              className="text-[#828282] shadow bg-transparent rounded text-center py-2 flex-1 border border-[#828282]"
              onClick={() => setIndex((i) => i - 1)}
            >
              Back
            </button>
            <button
              className="text-white flex-1 shadow bg-[#1CBD5C] rounded text-center py-2"
              onClick={() => navigate("/home")}
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default MerchantAuth;
