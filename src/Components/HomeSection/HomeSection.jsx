import React from 'react';

function HomeSection() {
  return (
    <div className=' cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border-red-800'>
        <div className=' w-[10rem] h-[13rem] '>
            <img className=' object-cover object-top w-full h-full ' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
        </div>

        <div className='p-4'>
            <h3 className=' text-lg text-gray-900 font-medium'>Nofilter</h3>
            <p className=' mt-3 text-sm text-gray-500'>Men Embroidered Jacquard Straight Kurta</p>

        </div>

    </div>
  )
}

export default HomeSection;