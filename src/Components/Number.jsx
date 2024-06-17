import React from 'react'

function Number() {
  return (
    <div className='w-full h-[18vw]  font-["Montserrat"]'>
      <div className="title h-[7vw]  flex items-center justify-center">
        <p className=' font-bold text-[1.7vw]  leading-none text-[#4A4A4A]'>THE NUMBERS ARE GROWING</p>
      </div>
        <div className="numberInfo flex justify-evenly items-center pl-[13vw] pr-[12vw] mt-[1vw]">

            <div className=' h-[8vw] w-[12vw] text-center '>
                <p className='text-[#737373]'>CUSTOMERS</p>
                <p className=' text-[2.5vw] text-[#DA4E52]'>23 M</p>
                <p className=' text-sm '>redBus is trusted by over 23 million happy customers globally</p>
            </div>

            <div className=' h-[8vw] w-[12vw] text-center '>
                <p className='text-[#737373]'>OPERATORS</p>
                <p className=' text-[2.5vw] text-[#DA4E52]'>2600</p>
                <p className=' text-sm '>network of over 2600 bus operators worldwide</p>
            </div>
            <div className=' h-[8vw] w-[12vw] text-center '>
                <p className='text-[#737373]'>BUS TICKETS</p>
                <p className=' text-[2.5vw] text-[#DA4E52]'>180+ M</p>
                <p className=' text-sm '>Over 180 million trips booked using redBus</p>
            </div>
        </div>
    </div>
  )
}

export default Number
