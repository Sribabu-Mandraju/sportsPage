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
          <FaLocationDot className="location text-[lime] outline-none" />
          <select
            name="location"
            id="location"
            className="outline-none ps-[10px] pe-[30px] max-h-[200px] overflow-y-auto bg-black text-white"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              World
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              New Jersey
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              New York
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Pennsylvania
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Indiana
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Iowa
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Illinois
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Virginia
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              West Virginia
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Tennessee
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Connecticut
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Michigan
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Arizona
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Louisiana
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Wyoming
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Oregon
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Kansas
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Washington DC
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Maryland
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Ohio
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              North Carolina
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Massachusetts
            </option>
            <option className="bg-[black] px-5 mx-5 text-[#abe718] ps-3">
              Mississippi
            </option>
          </select>
        </div>
        <FaRegCircleUser className="text-white rounded-full h-[40px] w-[40px]" />
      </div>
    </div>
  );
};
export default Navbar;
