import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <section className="relative mx-auto max-w-[400px] pb-[100px] pt-[50px] px-6 bg-transparent min-h-screen flex flex-col justify-start items-start space-y-2">
      <h2 className="text-center leading-10 font-bold text-[32px] max-w-sm">Page Not Found
      </h2>
      <div className="flex space-x-5 w-full pt-[4rem] items-center">
        <button
          className="text-[#828282] shadow bg-transparent rounded text-center py-2  border border-[#828282] w-[80px]"
          onClick={() => navigate("/home")}
        >
          Home
        </button>
      </div>
    </section>
  );
}

export default NotFound