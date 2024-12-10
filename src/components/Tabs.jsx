import React from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
export const Tabs = () => {
  return (
    <div className='flex lg:mt-[10px] gap-[30px] bg-[black] lg:bg-[white]'>
        <button className='bg-[black] w-[150px] h-[50px] rounded-r-lg text-white hidden lg:flex lg:justify-center lg:items-center'>NCAAB</button>
        <button><TfiMenuAlt /></button>
        <div className="Tabs lg:border-[1px] shadow-lg px-[20px] flex gap-[10px] rounded-lg items-center">
            <button className="bg-[#ABE718] h-[30px] px-[10px] rounded-md">ODDS</button>
            <button className="h-[30px] px-[10px] rounded-md">PICKS</button>
            <button className="h-[30px] px-[10px] rounded-md">FUTURES</button>
            <button className="h-[30px] px-[10px] rounded-md">INJURIES</button>
            <button className="h-[30px] px-[10px] rounded-md">RANKINGS</button>
            <button className="h-[30px] px-[10px] rounded-md">STANDINGS</button>
        </div>
    </div>
  )
}
