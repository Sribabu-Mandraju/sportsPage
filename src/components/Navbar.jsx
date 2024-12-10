import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar w-full bg-black h-[100px] flex justify-around">
        <div className="logo h-[50px] w-[170px]">
        <img class="logo-img h-full w-full" src="https://otcdn.virginia.us-east-1.oddstrader.com/OT-LogoWhiteGreen.svg" alt="Logo"/>
        </div>
        <div className="menu">
            <div className="nav-links flex text-white font-semibold text-xl">
               <ul className='flex gap-[20px]'>
                <li>ODDS</li>
                <li>PICKS</li>
                <li>SPORTSBOOKS</li>
                <li>REVIEWS</li>
                <li>STATES</li>
                </ul>
            </div>
        </div>
        <div className="profile">
            <div className="location">
                <select name="location" id="location">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                </select>
            </div>
        </div>
    </div>
  )
}
export default Navbar;
