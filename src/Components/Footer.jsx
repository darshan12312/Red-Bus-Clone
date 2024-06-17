import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { LiaFacebookF } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);

  const toggleInfo1 = () => {
    setShowInfo1(!showInfo1);
  };
  const toggleInfo2 = () => {
    setShowInfo2(!showInfo2);
  };
  const toggleInfo3 = () => {
    setShowInfo3(!showInfo3);
  };

  return (
    <div className='w-full min-h-[43vw] bg-[#F7F7F7] font-["Montserrat"]'>
      <div className="PopularSec flex flex-col items-center space-y-[2vw] pt-[5vw]">
        <div
          onClick={toggleInfo1}
          className=" pb-2 w-[60vw] bg-[#F7F7F7] border-b-2 "
        >
          <div className="title flex justify-between items-center ">
            <p className=" font-bold text-[#3E3E52] text-xl mb-[1vw]">
              Popular Bus Routes
            </p>
            <SlArrowDown />
          </div>
          <p
            id="para1"
            className={`text-sm mb-[1vw] ${showInfo1 ? "block" : "hidden"}`}
          >
            Bangalore BusChennai To Pondicherry BusChennai To Coimbatore
            BusChennai To Madurai BusChennai To Tirupathi BusChandigarh To
            Manali BusChandigarh To Shimla BusChandigarh To Delhi BusChandigarh
            To Dehradun BusChandigarh To Amritsar BusCoimbatore To Chennai
            BusCoimbatore To Bangalore BusCoimbatore To Ooty BusCoimbatore To
            Tiruchendur BusCoimbatore To Madurai BusAgra to Bareilly BusHisar to
            Chandigarh BusHisar to Delhi Bus Lucknow to Ballia BusLucknow to
            Moradabad BusRajkot to Dwarka BusSiliguri to Gangtok BusAhmedabad to
            Goa BusAhmedabad to Kanpur BusAkola to Pune Bus
          </p>
        </div>

        <div
          onClick={toggleInfo2}
          className=" pb-2 w-[60vw] bg-[#F7F7F7] border-b-2 "
        >
          <div className="title flex justify-between items-center ">
            <p className=" font-bold text-[#3E3E52] text-xl mb-[1vw]">
              Popular Cities
            </p>
            <SlArrowDown />
          </div>
          <p
            id="para1"
            className={`text-sm mb-[1vw] ${showInfo2 ? "block" : "hidden"}`}
          >
            Hyderabad Bus TicketsBangalore Bus TicketsChennai Bus TicketsPune
            Bus TicketsDelhi Bus Tickets Mumbai Bus TicketsKolkata Bus
            TicketsErnakulam Bus TicketsAhmedabad Bus TicketsVijayawada Bus
            Tickets
          </p>
        </div>

        <div
          onClick={toggleInfo3}
          className="pb-2  w-[60vw] bg-[#F7F7F7] border-b-2 "
        >
          <div className="title flex justify-between items-center ">
            <p className=" font-bold text-[#3E3E52] text-xl mb-[1vw]">
              Popular Bus Operators
            </p>
            <SlArrowDown />
          </div>
          <p
            id="para1"
            className={`text-sm  mb-[1vw] ${showInfo3 ? "block" : "hidden"}`}
          >
            No 1 Air TravelsYBM TravelsSri SMS TravelsSvkdt TravelsRKT Tours and
            TravelsRoyal CarsRahul TravelsJBT TravelsRaj ExpressVaishali
            ExpressRahul Travels IndoreDelhi Tours And TravelsAshok
            TravelsGreenline TravelsPawan TravelsRavi TravelsVRL TravelsDolphin
            TravelsGanesh TravelsKaveri TravelsNational TravelsBharathi
            TravelsCity Land TravelsCitylink TravelsKKaveri TravelsKK
            TravelsMahadev TravelsMaharaja TravelsM R TravelsNew Payal TravelsNo
            1 Air TravelsYBM TravelsSri SMS TravelsSvkdt TravelsRKT Tours and
            TravelsRoyal CarsRahul TravelsJBT TravelsRaj ExpressVaishali
            ExpressRahul Travels IndoreDelhi Tours And TravelsAshok
            TravelsGreenline TravelsPawan TravelsRavi TravelsVRL TravelsDolphin
            TravelsGanesh TravelsKaveri TravelsNational TravelsBharathi
            TravelsCity Land TravelsCitylink TravelsKKaveri TravelsKK
            TravelsMahadev TravelsMaharaja TravelsM R TravelsNew Payal
            TravelsParas TravelsShree Parshwanath TravelsPayal TravelsR K
            TravelsShivam TravelsShree Mahaveer TravelsSRS TravelsTulsi
            TravelsVaibhav TravelsVikas TravelsAmarnath TravelsAnand
            TravelsAshapura TravelsAshok Bus ServiceAshoka Travels
          </p>
        </div>
      </div>
      <div className="about h-[20vw]  flex flex-row justify-center ">
        <div className="1about  h-full w-[18vw] pr-[2.5vw] pl-[2vw] flex flex-col  justify-center border-b-2">
          <img
            className=" h-[3.5vw] w-[5vw] "
            src="https://s3.rdbuz.com/Images/rdc/rdc-redbus-logo.webp"
            alt=""
            srcset=""
          />
          <p className='font-["Montserrat"] mb-[4vw] pt-[0.4vw] text-sm text-[#737373]'>
            redBus is the world's largest online bus ticket booking service
            trusted by over 25 million happy customers globally. redBus offers
            bus ticket booking through its website, iOS and Android mobile apps
            for all major routes.
          </p>
        </div>
        <div className="2about  h-full w-[12vw] list-none font-['Montserrat'] flex flex-col justify-center pl-[2vw]  text-sm text-[#737373]  gap-[0.5vw] border-b-2">
          <li className=" text-lg  font-bold text-black">About redBus</li>
          <li>About us</li>
          <li>Investor Relations</li>
          <li>Contact us</li>
          <li>Mobile version</li>
          <li>redBus on mobile</li>
          <li>Sitemap</li>
          <li>Offers</li>
          <li>Careers</li>
          <li>Values</li>
        </div>
        <div className="3about  h-full w-[12vw] list-none font-['Montserrat'] flex flex-col pt-[2.3vw] pl-[2vw]  text-sm text-[#737373]  gap-[0.5vw] border-b-2">
          <li className=" text-lg  font-bold text-black">Info</li>
          <li>T&C</li>
          <li>Privacy policy</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>Bus operator registration</li>
          <li>Agent registration</li>
          <li>Insurance partner</li>
          <li>User agreement</li>
        </div>
        <div className="4about  h-full w-[12vw] list-none font-['Montserrat'] flex flex-col  pl-[2vw]  pt-[2.3vw]  text-sm text-[#737373]  gap-[0.5vw] border-b-2">
          <li className=" text-lg  font-bold text-black">Global Sites</li>
          <li>India</li>
          <li>Singapore</li>
          <li>Malaysia</li>
          <li>Indonesia</li>
          <li>Peru</li>
          <li>Colombia</li>
          <li>Combodia</li>
          <li>Vietnam</li>
        </div>
        <div className="5about  h-full w-[12vw] list-none font-['Montserrat'] flex flex-col pt-[2.3vw] pl-[2vw]  text-sm text-[#737373]  gap-[0.5vw] border-b-2">
          <li className=" text-lg  font-bold text-black">Our Partners</li>
          <li>Goibibo Bus</li>
          <li>Goibibo Hotels</li>
          <li>Makemytrip Hotels</li>
        </div>
      </div>
      <div className="rightReserve flex justify-around h-[5vw] items-center">
        <p className="text-sm ">
          Ⓒ 2024 Redbus India Pvt Ltd. All rights reserved
        </p>
        <div className="logo flex gap-[1vw] ">
          <a href="https://www.facebook.com/redBus.in/">
            <LiaFacebookF className="h-[1.3vw] w-[1.3vw]" />
          </a>
          <a href="https://in.linkedin.com/company/redbus_2/">
            <FaLinkedinIn className="h-[1.3vw] w-[1.3vw]" />
          </a>
          <a href="https://x.com/redBus_in/">
            <FaTwitter className="h-[1.3vw] w-[1.3vw]" />
          </a>
          <a href="https://www.instagram.com/redbusindia/">
            <AiFillInstagram className="h-[1.3vw] w-[1.3vw]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
