import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
const Navbar = () => {
    return (
    <div className="navbar w-full bg-black h-[100px] flex justify-around items-center">
      <div className="logo h-[50px] w-[170px]">
        <img
          class="logo-img h-full w-full"
          src="https://otcdn.virginia.us-east-1.oddstrader.com/OT-LogoWhiteGreen.svg"
          alt="Logo"
        />
      </div>
      <div className="menu hidden lg:flex">
        <div className="nav-links flex text-white font-semibold text-xl">
          <ul className="flex gap-[20px]">
            <li>ODDS</li>
            <li>PICKS</li>
            <li>SPORTSBOOKS</li>
            <li>REVIEWS</li>
            <li>STATES</li>
          </ul>
        </div>
        </div>
        <div className="profile gap-[30px] hidden lg:flex">
        <div className="location flex items-center gap-[10px]">
            <FaLocationDot className='location text-[lime] outline-none'/>
                <select name="location" id="location" className='outline-none bg-black text-white'>
                        <option className='bg-[white] text-black'>World</option>
                        <option className='bg-[white] text-black'>New Jersey</option> 
                        <option className='bg-[white] text-black'>New York</option> 
                        <option className='bg-[white] text-black'>Pennsylvania</option> 
                        <option className='bg-[white] text-black'>Indiana</option>
                        <option className='bg-[white] text-black'>Iowa</option> 
                        <option className='bg-[white] text-black'>Illinois</option>
                        <option className='bg-[white] text-black'>Virginia</option>
                        <option className='bg-[white] text-black'>WestVirginia</option>
                        <option className='bg-[white] text-black'>Tennessee</option>
                        <option className='bg-[white] text-black'>Connecticut</option> 
                        <option className='bg-[white] text-black'>Michigan</option> 
                        <option className='bg-[white] text-black'>Arizona</option>
                        <option className='bg-[white] text-black'>Louisiana</option>
                        <option className='bg-[white] text-black'>Wyoming</option>
                        <option className='bg-[white] text-black'>Oregon</option>
                        <option className='bg-[white] text-black'>Kansas</option>
                        <option className='bg-[white] text-black'>WashingtonDC</option>
                        <option className='bg-[white] text-black'>Maryland</option>
                        <option className='bg-[white] text-black'>Ohio</option> 
                        <option className='bg-[white] text-black'>NorthCarolina</option>
                        <option className='bg-[white] text-black'>Massachusetts</option>
                        <option className='bg-[white] text-black'>Mississippi</option>
                </select>
            </div>
            <FaRegCircleUser className="text-white rounded-full h-[40px] w-[40px]"/>
        </div>
        </div>
  )
}
export default Navbar;
