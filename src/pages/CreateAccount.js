import React from "react";

const CreateAccount = () => {
  return (
    <section className="relative mx-auto max-w-[400px] py-8 pt-[40px] px-6 bg-white min-h-screen flex flex-col justify-start items-center space-y-3">
      <h2 className="text-center leading-10 font-bold text-[32px] max-w-sm">
        Let’s Create your Account
      </h2>

      <form className="w-full pt-8">
        <div class="mb-6">
          <input
            type="text"
            className="bg-white border border-black text-gray-900 text-base block w-full p-1.5 rounded focus:outline-none"
            placeholder="First Name"
          />
        </div>
        <div class="mb-6">
          <input
            type="text"
            className="bg-white border border-black text-gray-900 text-base block w-full p-1.5 rounded focus:outline-none"
            placeholder="Last Name"
          />
        </div>
        <div class="mb-6">
          <input
            type="number"
            className="bg-white border border-black text-gray-900 text-base block w-full p-1.5 rounded focus:outline-none"
            placeholder="Phone No"
          />
        </div>
        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 bg-[#1CBD5C]  rounded border border-gray-300 focus:ring-3 focus:bg-[#198645]"
              required=""
            />
          </div>
          <label
            for="remember"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-600"
          >
            Have you read and agreed to this terms?
          </label>
        </div>
        <button
          type="button"
          className="text-white bg-[#1CBD5C] hover:bg-[#198645] focus:outline-none rounded shadow w-full sm:w-auto px-5 py-2 text-center font-bold text-sm"
        >
          Submit
        </button>
      </form>

      <div className="w-full absolute bottom-8 flex flex-col space-y-4">
        <p className="text-center text-sm">Already have an account? </p>
        <button className="text-gray-700 bg-[rgba(0, 0, 0, 0.08)] hover:bg-[rgba(0, 0, 0, 0.05)] focus:outline-none rounded shadow w-full sm:w-auto px-5 py-2 text-center text-sm font-bold">
          Login
        </button>
      </div>
    </section>
  );
};

export default CreateAccount;
