import React, { useState } from "react";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { IoBusOutline } from "react-icons/io5";
import { AiOutlineSwap } from "react-icons/ai";
import { CgCalendarDates } from "react-icons/cg";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import SwiperCard from "./SwiperCard";

function Hero() {
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");

  const Swap = ()=>{
    setfrom(to)
    setto(from)
  }


  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className=' z-[0] flex relative justify-center w-full h-[30vw] bg-no-repeat bg-center  bg-cover  bg-[url("https://st.redbus.in/Images/HomeIndia/HeroImageV2_C.png")] mb-[3vw]'>
      <h1 className='absolute top-10 text-[1.7vw]  leading-none tracking-tight font-["Montserrat"] font-bold text-[#FDFDFD]'>
        India's No. 1 Online Bus Ticket Booking Site
      </h1>

      <div className="absolute  top-40 cursor-pointer searchBox flex items-center justify-center w-full h-[7vw]">
        <div className="from  relative flex items-center  bg-[#FFFFFF] w-[16vw] rounded-tl-3xl rounded-bl-3xl h-[6vw] overflow-hidden border-r-2 ">
          <IoBusOutline className=" absolute scale-[2] w-1/3 bg-[#FFFFFF] " />

          <input
            onChange={(e) => {
              setfrom(e.target.value);
            }}
            type="text"
            id="from"
            placeholder="From"
            value={from}
            className='from absolute focus:border-none focus:outline-none placeholder:font-black cursor-pointer font-["Montserrat_Regular"] right-1 w-2/3 h-full'
          />
        </div>

        <button
          onClick={Swap}
          className="swap group h-[2.5vw] bg-[#FFFFFF] border-[1px] rounded-full p-1 flex items-center justify-center w-[2.5vw] absolute left-[37.5vw] -translate-x-1/2  z-10 hover:shadow-2xl"
        >
          <AiOutlineSwap className=" group-hover:scale-[1.6] scale-[1.5]" />
        </button>

        <div className="To relative flex items-center  bg-[#FFFFFF] w-[16vw] h-[6vw] border-r-2 overflow-hidden">
          <IoBusOutline className=" absolute scale-[2] w-1/3 bg-[#FFFFFF]   " />

          <input
            onChange={(e) => {
              setto(e.target.value);
            }}
            type="text"
            id="to"
            value={to}
            placeholder="To"
            className='to absolute focus:border-none focus:outline-none placeholder:font-black cursor-pointer font-["Montserrat_Regular"] right-1 w-2/3 h-full'
          />
        </div>

        <div className="To relative flex items-center    bg-[#FFFFFF] w-[8vw] h-[6vw] border-r-2  ">
          <CgCalendarDates className=" absolute scale-[2] left-5 bg-[#FFFFFF]   " />

          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Date"
            className='absolute cursor-pointer focus:border-none focus:outline-none placeholder:font-black font-["Montserrat_Regular"] w-[5vw] h-[5vw]  left-11 m-0 p-0 -bottom-[2.3vw]   '
          />
        </div>

        <div className="searchButton flex justify-center items-center text-xl bg-[#D24C53] font-['Montserrat'] font-bold text-[#FDFDFD]  rounded-tr-3xl rounded-br-3xl w-[16vw] h-[6vw]">
          {" "}
          SEARCH BUSES
        </div>
      </div>
    </div>
  );
}

export default Hero;
