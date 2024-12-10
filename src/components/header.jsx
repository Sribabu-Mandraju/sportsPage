import React from 'react'
import { LuCircleChevronDown } from "react-icons/lu";
import { MdOutlineCalendarMonth } from "react-icons/md";
export const Header = () => {
  return (
    <div>
        <div className="heading flex items-center gap-[10px] text-[24px] md:px-[20px] mt-[18px] px-[10px] ">
            <h1 className='font-semibold'>College Basketball Odds</h1>
            <LuCircleChevronDown />
        </div>
        <div className="drop-downs-wrap flex md:justify-between md:px-[20px]  items-center justify-between">
            <div className="drop-downs flex md:gap-[20px] pt-[10px] pl-[10px] gap-1">
                <select name="Total" id="Total" className='rounded-lg border-[1px] md:p-[0_14px_0_18px] outline-none text-[#393939]'>
                    <option>Spread</option>
                    <option>Money</option>
                    <option>Total</option>
                    <option>Merged</option>
                </select>
                <select name="Total" id="Total" className='rounded-lg border-[1px] md:p-[5px_14px_5px_18px] outline-none text-[#393939]'>
                    <option>Game</option>
                    <option>1H</option>
                    <option>2H</option>
                </select>
                <select name="Total" id="Total" className='rounded-lg border-[1px] md:p-[5px_14px_5px_18px] outline-none text-[#393939]'>
                    <option>Spread</option>
                    <option>Money</option>
                    <option>Total</option>
                    <option>Merged</option>
                </select>
            </div>
            <div className="schedule flex items-center gap-1 md:gap-3 overflow-x-hidden pr-[3px] font-semibold">
                    <p className='text-[#0078f0]'>Today</p>
                    <p className='text-[#0078f0] hidden md:block'>Yesterday</p>
                    <MdOutlineCalendarMonth className='text-[#0078f0] md:text-[20px]'/>
            </div>
        </div>
    </div>
  )
}
