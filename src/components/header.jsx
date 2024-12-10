import React from 'react'
import { LuCircleChevronDown } from "react-icons/lu";
export const Header = () => {
  return (
    <div>
        <div className="heading flex items-center gap-[10px] text-[24px] px-[20px] ">
            <h1 className='font-semibold'>College Basketball Odds</h1>
            <LuCircleChevronDown />
        </div>
        <div className="drop-downs flex px-[20px] gap-[20px] pt-[10px]">
             <select name="Total" id="Total" className='rounded-lg border-[1px] p-[5px_14px_5px_18px] outline-none text-[#393939]'>
                <option>Spread</option>
                <option>Money</option>
                <option>Total</option>
                <option>Merged</option>
             </select>
             <select name="Total" id="Total" className='rounded-lg border-[1px] p-[5px_14px_5px_18px] outline-none text-[#393939]'>
                <option>Game</option>
                <option>1H</option>
                <option>2H</option>
             </select>
             <select name="Total" id="Total" className='rounded-lg border-[1px] p-[5px_14px_5px_18px] outline-none text-[#393939]'>
                <option>Spread</option>
                <option>Money</option>
                <option>Total</option>
                <option>Merged</option>
             </select>
        </div>
    </div>
  )
}
