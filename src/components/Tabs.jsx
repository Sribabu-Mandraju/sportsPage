import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";

export const Tabs = () => {
  const [tabs, setTabs] = useState("ODDS");

  // Array of tab names
  const tabNames = ["ODDS", "PICKS", "FUTURES", "INJURIES", "RANKINGS", "STANDINGS"];

  return (
    <div className="flex lg:mt-[10px] gap-[30px] bg-[black] lg:bg-[white]">
      <button className="bg-[black] w-[150px] h-[50px] rounded-r-lg text-white hidden lg:flex lg:justify-center lg:items-center">
        NCAAB
      </button>
      <button className="lg:hidden text-white flex justify-center items-center text-[24px] pl-[10px]">
        <TfiMenuAlt />
      </button>
      <div className="Tabs lg:border-[1px] shadow-lg px-[20px] py-[10px] text-[white] lg:text-black flex gap-[10px] lg:rounded-lg items-center bg-[#1b1b1b] lg:bg-[white] w-auto overflow-x-scroll">
        {tabNames.map((tabName) => (
          <button
            key={tabName}
            className={`${
              tabs === tabName ? "bg-[#abe718]" : ""
            } h-[30px] px-[10px] font-semibold rounded-md`}
            onClick={() => setTabs(tabName)}
          >
            {tabName}
          </button>
        ))}
      </div>
    </div>
  );
};
