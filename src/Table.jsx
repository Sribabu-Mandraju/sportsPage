import React from 'react'
export const Table = () => {
  return (
    <div className='p-[10px] md:p-[30px]'>
            <div className="details-wrap  ">
            <div className='mt-[30px] shadow-lg  p-[10px] '> 
                   <div className="event-status-wrap flex gap-[40px]">
                     <div className="title-wrap flex items-center gap-[20px]">
                     <h1 className='title text-[24px] font-semibold'>Title</h1>
                     <h3 className='text-[24px]'>Time</h3>
                     </div>  
                    <select className='outline-none border-[1px] p-[5px] rounded-lg'>
                      <option value="">Comapany-1</option>
                      <option value="">Comapany-2</option>
                      <option value="">Comapany-3</option>
                      <option value="">Comapany-4</option>
                      <option value="">Comapany-5</option>
                      <option value="">Comapany-6</option>
                    </select>
                    </div>         
            
            <div className="flex gap-[30px] justify-start pt-[20px] py-[30px] group">
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
