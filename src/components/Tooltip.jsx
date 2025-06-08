import React from 'react';
import mongoDB from '../assets/icons/mongodb.svg';
import express from '../assets/icons/express.svg';
import react from '../assets/icons/react.svg';
import node from '../assets/icons/node.svg';

const ToolTip = () => {
  return (
    <div className=''>
        <div className='py-6 '>
            <h1 className='text-blue-600 font-bold text-4xl'>MERN STACK</h1>
        </div>

        <div className='w-[418px] flex justify-between items-center pt-14 pb-6'>
            <div className='flex flex-col items-center justify-between text-[36px] font-bold gap-5 relative'>
                <img src={mongoDB} alt="mongodb" className='relative z-10 peer' />
                <span className='text-[#47A248] cursor-default'>M</span>
                <div className='bg-[#47A248] text-[14px] text-white absolute top-2 rounded-3xl px-3.5 py-2 opacity-0 after:content-[""] after:bg-[#47A248] after:w-4 after:h-4 after:absolute after:left-1/2 after:-bottom-2 after:-rotate-45 after:-translate-x-1/2 transition-all duration-200 ease-in-expo peer-hover:-translate-y-16 peer-hover:opacity-100'>
                    <span className='relative z-1'>
                        MongoDB
                    </span>
                </div>
            </div>

            <div className='flex flex-col items-center justify-between text-[36px] font-bold gap-5 relative'>
                <img src={express} alt="express" className='relative z-10 peer' />
                <span className='text-gray-200 cursor-default'>E</span>
                <div className='bg-gray-200 text-[14px] text-black absolute top-2 rounded-3xl px-3.5 py-2 opacity-0 after:content-[""] after:bg-gray-200 after:w-4 after:h-4 after:absolute after:left-1/2 after:-bottom-2 after:-rotate-45 after:-translate-x-1/2 transition-all duration-200 ease-in-expo peer-hover:-translate-y-16 peer-hover:opacity-100'>
                    <span className='relative z-1'>
                        Express.js
                    </span>
                </div>
            </div>

            <div className='flex flex-col items-center justify-between text-[36px] font-bold gap-5 relative'>
                <img src={react} alt="react" className='relative z-10 peer' />
                <span className='text-[#61DAFB] cursor-default'>R</span>
                <div className='bg-[#61DAFB] text-[14px] text-black absolute top-2 rounded-3xl px-3.5 py-2 opacity-0 after:content-[""] after:bg-[#61DAFB] after:w-4 after:h-4 after:absolute after:left-1/2 after:-bottom-2 after:-rotate-45 after:-translate-x-1/2 transition-all duration-200 ease-in-expo peer-hover:-translate-y-16 peer-hover:opacity-100'>
                    <span className='relative z-1'>
                        React.js
                    </span>
                </div>
            </div>

            <div className='flex flex-col items-center justify-between text-[36px] font-bold gap-5 relative'>
                <img src={node} alt="node" className='relative z-10 peer' />
                <span className='text-[#8CC84B] cursor-default'>N</span>
                <div className='bg-[#8CC84B] text-[14px] text-black absolute top-2 rounded-3xl px-3.5 py-2 opacity-0 after:content-[""] after:bg-[#8CC84B] after:w-4 after:h-4 after:absolute after:left-1/2 after:-bottom-2 after:-rotate-45 after:-translate-x-1/2 transition-all duration-200 ease-in-expo peer-hover:-translate-y-16 peer-hover:opacity-100'>
                    <span className='relative z-1'>
                        Node.js
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToolTip;