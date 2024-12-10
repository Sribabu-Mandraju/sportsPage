import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="bg-[black] w-full flex flex-col items-center  relative pb-[140px]">
      <div className="logo flex justify-center w-full order-1">
        <img
          className="logo-img h-[50px] w-[170px] mt-[50px]"
          src="https://otcdn.virginia.us-east-1.oddstrader.com/OT-LogoWhiteGreen.svg"
          alt="Logo"
        />
      </div>
      <div className="social-media text-white flex justify-center items-center gap-[30px] my-[22px] md:mt-[48px] md:mb-[18px] order-3 md:order-2 border-b-[1px] pb-[15px] md:border-b-0">
        <h1 className="font-[12px] md:font-[24px]">Follow us on</h1>
        <FaTwitter className="text-[20px] md:text-[22px]" />
        <FaFacebookF className="text-[20px] md:text-[22px]" />
        <FaDiscord className="text-[20px] md:text-[22px]" />
        <FaInstagram className="text-[20px] md:text-[22px]" />
      </div>
      <ul className="text-white font-semibold px-[50px] text-[16px] hidden sm:flex lg:text-[20px] justify-center gap-[30px] lg:gap-[70px] items-center border-b-[1px] pb-[30px] border-b-[#787878] order-3">
        <li>Terms of Use</li>
        <li>Contact Us</li>
        <li>OddsTrader App</li>
        <li>Blog</li>
        <li>Privacy Policy</li>
        <li>DMCA</li>
      </ul>
      <p className="text-white mt-[4.5px] md:mt-[35px] md:mb-[45px] order-2 md:order-4">
        &copy; OddsTrader 2024 All Rights Reserved
      </p>
      <p className="text-white px-[10px] text-[10px] md:text-[16px] mx-[18px] order-4 md:order-5">
        21+ Seek help with a gambling addiction at 1-800-Gambler. OddsTrader is
        licensed to operate in NJ, NY, PA, IN, CO, IA, IL, VA, WV, TN, CT, MI,
        AZ, LA, WY, OR, KS, DC, MA & OH.
      </p>
      <div className="mobile-navigate w-full bg-[white] h-[100px] rounded-t-[30px] md:rounded-t-[50px] fixed bottom-0 lg:hidden shadow-lg z-10 flex justify-around">
        <div className="today-wrap flex flex-col mt-[14px] justify-center items-center">
          <img
            src="https://www.oddstrader.com/TodaySelected.svg"
            alt="today"
            className="h-[24px] w-[24px]"
          />
          <span>Today</span>
        </div>
        <div className="picks-wrap flex flex-col mt-[14px] justify-center items-center">
          <img
            src="https://www.oddstrader.com/Picks.svg"
            alt="picks"
            className="h-[24px] w-[24px]"
          />
          <span>Picks</span>
        </div>
        <div className="League-wrap flex flex-col mt-[14px] relative">
          <div className="circle-wrap h-[50px] w-[50px] rounded-full  flex justify-center items-center absolute top-[-30px] bg-[white]">
            <img
              src="https://logos.oddstrader.com/league-logos/Leagues.webp"
              alt="League"
              className="h-[24px] w-[24px]"
            />
          </div>
          <span className="py-[20px]">League</span>
        </div>
        <div className="mybets-wrap flex flex-col mt-[14px] justify-center items-center">
          <img
            src="https://www.oddstrader.com/MyBets.svg"
            alt="mybets"
            className="h-[24px] w-[24px]"
          />
          <span>My Bets</span>
        </div>
        <div className="Profile-wrap flex flex-col mt-[14px] justify-center items-center">
          <img
            src="https://www.oddstrader.com/Profile.svg"
            alt="mybets"
            className="h-[24px] w-[24px]"
          />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};
