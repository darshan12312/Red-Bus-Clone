import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
 
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

function SwiperCard() {
  return (
    <div className='relative cursor-pointer z-[10] mt-[-7vw] ml-[17vw]  w-[68vw] h-[17vw] bg-white shadow-2xl rounded-3xl mb-[4vw] '>

        <div className='header h-5vw  flex justify-between  pl-12 pr-8 pt-10 pb-5'>
            <h2 className='font-["Montserrat"]  text-[#4A4A4A] text-3xl'>TRENDING OFFERS</h2>
            <a href="">
            <button className=' rounded-3xl p-[0.4vw] pl-7 pr-7 text-xl border-[1px] border-slate-400 text-[#2634D9]  font-semibold'>View All</button>
            </a>
        </div>
       
        <Swiper navigation={true} modules={[Navigation]} slidesPerView={3.5} className="mySwiper p-[1vw] font-['Montserrat'] ">
        
        <SwiperSlide>
          
          <div className='w-1/3  h-full flex items-center justify-center   '>
           <div className="circle  h-[4vw] w-[4vw] rounded-full overflow-hidden flex items-center justify-center ">
            <img className=' bg-cover' src="https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png" alt="" srcset="" />
           </div>
          </div>
          <div className=' relative w-2/3  h-full '>
            <button className='flex items-center justify-center text-[0.7vw] text-white font-semibold rounded-3xl p-2  pt-1 pb-1  bg-transparent border-[1px] mt-3'>BUS</button>
            <h2 className=' absolute text-left mt-2 text-[0.9vw] text-white font-semibold leading-none'>Save up to Rs 250 on bus tickets</h2>
            <p className='absolute bottom-11 text-[0.7vw] text-white '>Valid till 01 Jun</p>
            <div className="offerLogo">
            <button className='absolute bottom-2 flex items-center justify-center text-[0.7vw] text-white font-semibold rounded-md p-1    bg-transparent border-[1px] mt-3'>FIRST</button>
            <HiOutlineClipboardDocumentList className='text-white bottom-4 absolute left-16 scale-[1.5] ' />
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className='w-1/3  h-full flex items-center justify-center  '>
           <div className="circle  h-[4vw] w-[4vw] rounded-full overflow-hidden flex items-center justify-center ">
            <img className=' bg-cover' src="https://st.redbus.in/Images/INDOFFER/ICICI500/MWeb-80_80%20ICICI.png" alt="" srcset="" />
           </div>
          </div>
          <div className=' relative w-2/3  h-full '>
            <button className='flex items-center justify-center text-[0.7vw] text-white font-semibold rounded-3xl p-2  pt-1 pb-1  bg-transparent border-[1px] mt-3'>BUS</button>
            <h2 className=' absolute text-left mt-2 text-[0.9vw] text-white font-semibold leading-none'>Save upto Rs 500 with ICICI</h2>
            <p className='absolute bottom-11 text-[0.7vw] text-white '>Valid till 01 Jun</p>
            <div className="offerLogo ">
            <button className='absolute bottom-2 flex items-center justify-center text-[0.7vw] text-white font-semibold rounded-md p-1    bg-transparent border-[1px] mt-3'>ICICI500</button>
            <HiOutlineClipboardDocumentList className='text-white bottom-4 ml-4 absolute left-16 scale-[1.5] ' />
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className='w-1/3  h-full flex items-center justify-center  '>
           <div className="circle  h-[4vw] w-[4vw] rounded-full overflow-hidden flex items-center justify-center ">
            <img className=' bg-cover' src="https://st.redbus.in/Images/INDOFFER/80x80/SUPERHIT.png" alt="" srcset="" />
           </div>
          </div>
          <div className=' relative w-2/3  h-full '>
            <button className='flex items-center justify-center text-[0.7vw] text-white font-semibold rounded-3xl p-2  pt-1 pb-1  bg-transparent border-[1px] mt-3'>BUS</button>
            <h2 className=' absolute text-left mt-2 text-[0.9vw] text-white font-semibold leading-none'>Save up to Rs 300 on AP, TS routes</h2>
            <p className='absolute bottom-11 text-[0.7vw] text-white '>Valid till 01 Jun</p>
            <div className="offerLogo">
            <button className='absolute bottom-2 flex items-center justify-center text-[0.7vw] text-white font-semibold rounded-md p-1    bg-transparent border-[1px] mt-3'>SUPERHIT</button>
            <HiOutlineClipboardDocumentList className='text-white bottom-4 absolute left-16 scale-[1.5] ml-7 ' />
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className='w-1/3  h-full flex items-center justify-center  '>
           <div className="circle  h-[4vw] w-[4vw] rounded-full overflow-hidden flex items-center justify-center ">
            <img className=' bg-cover' src="https://st.redbus.in/Images/INDOFFER/BUS300/80x801.png" alt="" srcset="" />
           </div>
          </div>
          <div className=' relative w-2/3  h-full '>
            <button className='flex items-center justify-center text-[0.7vw] text-white font-semibold rounded-3xl p-2  pt-1 pb-1  bg-transparent border-[1px] mt-3'>BUS</button>
            <h2 className=' absolute text-left mt-2 text-[0.9vw] text-white font-semibold leading-none'>Save up to Rs 300 on Delhi, North, GJ, MP,</h2>
            <p className='absolute bottom-11 text-[0.7vw] text-white '>Valid till 01 Jun</p>
            <div className="offerLogo">
            <button className='absolute bottom-2 flex items-center justify-center text-[0.7vw] text-white font-semibold rounded-md p-1    bg-transparent border-[1px] mt-3'>BUS300</button>
            <HiOutlineClipboardDocumentList className='text-white bottom-4 absolute left-16 scale-[1.5] ml-4 ' />
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className='w-1/3  h-full flex items-center justify-center  '>
           <div className="circle  h-[4vw] w-[4vw] rounded-full overflow-hidden flex items-center justify-center ">
            <img className=' bg-cover' src="https://st.redbus.in/Images/INDOFFER/CHARTERED15/80x80.png" alt="" srcset="" />
           </div>
          </div>
          <div className=' relative w-2/3  h-full '>
            <button className='flex items-center justify-center text-[0.7vw] text-white font-semibold rounded-3xl p-2  pt-1 pb-1  bg-transparent border-[1px] mt-3'>BUS</button>
            <h2 className=' absolute text-left mt-2 text-[0.9vw] text-white font-semibold leading-none'>Save up to Rs 300 on Chartered Bus</h2>
            <p className='absolute bottom-11 text-[0.7vw] text-white '>Valid till 01 Jun</p>
            <div className="offerLogo">
            <button className='absolute bottom-2 flex items-center justify-center text-[0.7vw] text-white font-semibold rounded-md p-1    bg-transparent border-[1px]  mt-3'>CHARTERED15</button>
            <HiOutlineClipboardDocumentList className='text-white bottom-4 absolute left-16 scale-[1.5] ml-14 ' />
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className='w-1/3  h-full flex items-center justify-center  '>
           <div className="circle  h-[4vw] w-[4vw] rounded-full overflow-hidden flex items-center justify-center ">
            <img className=' bg-cover' src="https://st.redbus.in/Images/INDOFFER/80x80/SBSTC.png" alt="" srcset="" />
           </div>
          </div>
          <div className=' relative w-2/3  h-full '>
            <button className='flex items-center justify-center text-[0.7vw] text-white font-semibold rounded-3xl p-2  pt-1 pb-1  bg-transparent border-[1px] mt-3'>BUS</button>
            <h2 className=' absolute text-left mt-2 text-[0.9vw] text-white font-semibold leading-none'>Save 25% up to Rs 100 on SBSTC bus</h2>
            <p className='absolute bottom-11 text-[0.7vw] text-white '>Valid till 01 Jun</p>
            <div className="offerLogo">
            <button className='absolute bottom-2 flex items-center justify-center text-[0.7vw] text-white font-semibold rounded-md p-1    bg-transparent border-[1px] mt-3'>SBNEW</button>
            <HiOutlineClipboardDocumentList className='text-white bottom-4 absolute left-16 scale-[1.5] ml-2 ' />
            
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  )
}

export default SwiperCard
