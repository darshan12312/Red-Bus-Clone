import React from "react";
import primo from "../assets/primo.png";
import { FaArrowRightLong } from "react-icons/fa6";

function About() {
  return (
    <div className=" w-full  mb-[5vw] ">
      <div className="ml-[20vw] relative ">
        <div className="h-[35vw] w-[60vw] m-0 mt-[3vw]  flex">
          <div className='w-1/2 h-full  font-["Montserrat"] '>
            <p className="  text-[2.1vw]  font-normal flex flex-row pt-[2vw]  ">
              NOW,{" "}
              <h2 className=" contents font-semibold">
                GET MORE THAN JUST BUS
              </h2>{" "}
              TICKETS WITH REDBUS!
            </p>
            <div className="buttonLogo flex cursor-pointer  w-[12vw] h-[4vw] mt-[1.2vw]  pt-[1vw] justify-center items-center border-b-4 border-[#D84E55] ">
              <img
                className="h-[3vw] w-[3vw] mr-[0.5vw] "
                src="https://s1.rdbuz.com/web/images/homeV2/AboutUs/redRail.svg"
                alt=""
              />
              <p className=" text-[#D84E55] text-normal font-bold ">
                Train Tickets
              </p>
            </div>
            <p className=" text-[#1d1d1d] pr-[1vw] leading-8 mt-[2vw]">
              Book IRCTC Train Tickets on redRail simple & superfast booking
              process with no service fee + no payment gateway charge.
            </p>

            <div className=" list-none font-['Montserrat] mt-[1.8vw] ">
              <li className="flex w-[18vw]  mt-[1vw]  ">
                <img
                  className=" h-[1.5vw] ml-[0.3vw] mr-[1.4vw]  "
                  src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/railAuthorized.png"
                  alt=""
                  srcset=""
                />
                <p className=" font-bold text-medium ">
                  {" "}
                  Authorised IRCTC Partner
                </p>
              </li>
              <li className="flex w-[18vw]  mt-[1vw] ">
                <img
                  className=" h-[1.5vw] ml-[0.3vw] mr-[1.7vw] "
                  src="https://s2.rdbuz.com/web/images/homeV2/AboutUs/railHasslefree.svg"
                  alt=""
                  srcset=""
                />
                <p className=" font-bold text-medium ">
                  Instant refunds on UPI payments
                </p>
              </li>
              <li className="flex w-[18vw]  mt-[1vw] ">
                <img
                  className=" h-[1.5vw] mr-[1vw]  "
                  src="https://s1.rdbuz.com/web/images/homeV2/AboutUs/railrefunds.svg"
                  alt=""
                  srcset=""
                />
                <p className=" font-bold text-medium ">
                  Hassle- free customer support
                </p>
              </li>
            </div>
            <a href="https://www.redbus.in/railways">
            <button className=" w-[12.2vw] h-[3vw] mt-[1.5vw] bg-[#D84E55] text-white flex items-center justify-center rounded-2xl ">
              <p className=" font-bold  pr-[0.3vw] ">Book Train Tickets</p>
              <FaArrowRightLong className=" w-[2vw] h-[1.3vw] " />
            </button>
            </a>
            
          </div>
          <div className="w-1/2 h-full  relative">
            <img
              src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/aboutUsImg.svg"
              alt=""
              srcset=""
              className=" bg-contain h-full w-full"
            />
          </div>
        </div>

        <img
          className="h-[30vw] w-[60vw] m-0 mt-[5vw]   "
          src={primo}
          alt=""
          srcset=""
        />
          <img className=" absolute top-4 right-80" src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/railPop.webp" alt="" srcset="" />
      </div>
    </div>
  );
}

export default About;
