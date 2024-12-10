import React from 'react'
import Dummy from '../src/assets/dummy.png'
export const Table = () => {
  return (
    <div className=' p-[10px] md:p-[30px] flex'>
         <div class="scoreboard w-full md:w-[550px]  md:skew-x-[-20deg]  rounded-2xl flex [box-shadow:inset_0_0_10px_0_rgb(237,236,248)] md:[box-shadow:inset_0_0_30px_0_rgb(237,236,248)] flex-col md:flex-row lg:px-[0px] justify-center items-center">
                     <div class="photo md:h-[120px] md:w-[120px] md:shadow-[0_40px_10px_0_#e066ff] rounded-2xl md:py-[30px] md:ml-[-30px] flex justify-center w-full">
                        <img src={Dummy} class="md:h-[120px] md:w-[120px] h-[200px] w-[320px] rounded-2xl"/>
                     </div>
                     <div className="predictions-wrap flex flex-col">
                     <div className="event-status-wrap flex md:gap-[40px] flex-col md:flex-row">
                        <div className="title-wrap flex gap-[20px] py-[10px]">
                          <h1 className='title text-[20px] md:text-[24px] font-semibold'>Title...............</h1>
                          <h3 className='text-[20px] md:text-[24px]'>6:30PM</h3>
                     </div>  
                      <select className='outline-none border-[1px]  rounded-lg h-[30px] my-[10px] w-[150px]'>
                          <option value="">Comapany-1</option>
                          <option value="">Comapany-2</option>
                          <option value="">Comapany-3</option>
                          <option value="">Comapany-4</option>
                          <option value="">Comapany-5</option>
                          <option value="">Comapany-6</option>
                      </select>
                    </div>
                    <div className="flex gap-[30px] justify-start pt-[20px] p-[10px] md:p-[30px] group">
                      <div className="team-wrap flex flex-col gap-y-[30px] ">
                          <div className="team-1 flex gap-[20px]">
                            <h1 className='group-hover:text-[#0078f0]'>INDONESIA</h1>
                            <button><span className='border-[1px] border-[#0078f0] rounded-md p-[5px_20px_5px_20px]'>+125</span></button>
                            <button><span  className='border-[1px] border-[#0078f0] rounded-md  p-[5px_20px_5px_20px]'>+100</span></button>
                          </div>
                      <div className="team-2 flex gap-[20px]">
                        <h1 className='group-hover:text-[#0078f0]'>Bangladesh</h1>
                        <button><span className='border-[1px] border-[#0078f0] rounded-md p-[5px_20px_5px_20px]'>+125</span></button>
                        <button><span  className='border-[1px] border-[#0078f0] rounded-md  p-[5px_20px_5px_20px]'>+100</span></button>
                      </div>
                      </div>
                    </div>
                    </div> 
                    </div> 
           
           </div>
  )
}
