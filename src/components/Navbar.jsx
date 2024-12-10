import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
const Navbar = () => {return (
    <div className="navbar w-full bg-black h-[100px] flex justify-around items-center">
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
            <div className="location flex items-center gap-[10px]">
            <FaLocationDot className='text-[lime] outline-none'/>
                <select name="location" id="location" className='outline-none bg-[black] text-white'>
                        <option>World</option>
                        <option>New Jersey</option> 
                        <option>New York</option> 
                        <option>Pennsylvania</option> 
                        <option>Indiana</option>
                        <option>Iowa
         </option>                   <option>Illinois
     </option>                       <option>Virginia
     </option>                       <option>West Virginia
</option>                            <option>Tennessee
    </option>                        <option>Connecticut
  </option>                          <option>Michigan
     </option>                       <option>Arizona
      </option>                      <option>Louisiana
    </option>                        <option>Wyoming
      </option>                      <option>Oregon
       </option>                     <option>Kansas
       </option>                     <option>Washington DC
</option>                            <option>Maryland
     </option>                       <option>Ohio
         </option>                   <option>North Carolina</option>
                            <option>Massachusetts
</option>                            <option>Mississippi 
 </option>
                            
                </select>
            </div>
        </div>
    </div>
  )
}
export default Navbar;
