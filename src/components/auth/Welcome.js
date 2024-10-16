import React from "react";

const Welcome = () => {
  return (
    <div className="xl:max-w-[732px] w-full bg-[#89089F] text-white flex flex-col justify-center items-center p-10 xl:rounded-l-3xl ">
      <img
        src="/Art.png"
        alt="Welcome to our shop"
        className="md:w-[367px] md:h-[388px] mb-3"
      />
      <h2 className="text-2xl font-semibold mb-2">Welcome to our shop</h2>
      <p className="text-sm">Purchase imported shoes</p>
      <img src="/pager.svg" alt="pager" className="mt-[55px]" />
    </div>
  );
};

export default Welcome;
