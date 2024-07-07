import React, { useEffect, useState } from "react";
import { LuBus } from "react-icons/lu";
import { WiTrain } from "react-icons/wi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {

  const [AccountData, setAccountData] = useState(false);

  const toggleInfo = ()=>{
    setAccountData(!AccountData)
  }

  return (
    <div className="  z-20 bg-white w-full h-[5.4vw] flex items-center justify-around ">
      <img  className=" cursor-pointer ml-[19vw] scale-[0.8]"
        src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg"
        alt=""
        srcset=""
      />
      <span className="verticalSeprator h-[1vw] bg-[#E0E0E0] w-[0.1vw]  m-[2vw]  ">
        {" "}
      </span>
      <div className="links flex gap-3 mr-[27vw] ">
        <a href="#" >
          <div className=" relative w-[5.5vw] h-[3.5vw] bg-[#D84E55] fill-current text-[#FFFFFF] rounded-lg flex justify-center items-center  ">
            <LuBus className="absolute scale-[2] top-3 w-full" />
            <p className='absolute w-full font-["Montserrat_Regular"] bottom-3 left-3 text-sm'>
              Bus Tickets
            </p>
          </div>
        </a>
        <a href="https://www.redbus.in/railways">
          <div className="group relative w-[6vw] h-[3.5vw] hover:bg-[#f0f0f0]  duration-300 ease-out  text-[#1D1D1D] rounded-lg flex justify-center items-center ">
            <WiTrain className=" absolute group-hover:text-[#D84E55] h-[2vw] top-1 w-full  " />
            <p className='absolute w-full  font-["Montserrat_Regular"] bottom-2 left-3 text-base'>
              Train Tickets
            </p>
          </div>
        </a>
      </div>

      <div className="  about flex gap-5 mr-[15vw] ">
        <a href="https://www.redbus.in/info/redcare">
        <div className="cursor-pointer help h-[1.5vw]  hover:bg-[#f0f0f0] duration-300 ease-out flex gap-3  items-center justify-center  rounded-md p-5 text-[#1D1D1D] ">
          <TfiHeadphoneAlt className=" scale-[1.4]" />
          <p>Help</p>
        </div>
        </a>

        <div onClick={toggleInfo} className="relative cursor-pointer account h-[1.5vw] hover:bg-[#f0f0f0] duration-300 ease-out flex gap-3  items-center justify-center  rounded-md p-5 text-[#1D1D1D] 
         ">
          <CgProfile className="scale-[1.4]" />
          <p className="">Account</p>
          <IoIosArrowDown />
          <div className={`accountData overflow-hidden absolute top-[2.5vw]  z-10  h-[15vw] w-[9vw] bg-white shadow-sm   shadow-slate-300 list-none font-['Montserrat'] text-[15px] rounded-2xl text-[#737373] ${AccountData ? 'block' : 'hidden'} `} >

          <li className="flex w-full  h-[2.5vw] tracking-tight  pl-[1vw] mt-[1vw] items-center hover:bg-[#F3F4F9]">Cancel Ticket</li>
          <li className="flex w-full  h-[2.5vw] tracking-tight  pl-[1vw] items-center hover:bg-[#F3F4F9]">Change Travel Date</li>
          <li className="flex w-full  h-[2.5vw] tracking-tight  pl-[1vw] items-center hover:bg-[#F3F4F9]">Show My Ticket</li>
          <li className="flex w-full  h-[2.5vw] tracking-tight  pl-[1vw] items-center hover:bg-[#F3F4F9]">Email/SMS</li>
          <span className="horizontalSeprator block  w-[full]  border-[0.1vw]  border-[#E5E5E5] mb-[0.4vw] mt-[0.2vw] "></span>
          <li className="flex w-full  h-[2.5vw] tracking-tight  pl-[1vw] items-center hover:bg-[#F3F4F9]">Login/Sign up</li>
       </div>
        </div>
      
      </div>
    </div>
    
  );
}

export default Navbar;
