import React from 'react';
import GymApp from "../assets/Images/Gym-App.webp";
import TaskManager from "../assets/Images/Task-Manager.webp";

const ProjectSection = () => {
  return (
    <div>
        {/* First Image then Discription */}
        <div className='flex gap-[80px] items-center mt-12 relative'>
            <div className='h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2'></div>
            <div className='w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-black z-10 hover:scale-110 ease-in-out duration-100'></div>

            <a href="#" className='w-full flex relative'>
                <div className='relative group hover:scale-105 ease-in-out duration-200'>
                    <span className='flex bg-[#fc815c] absolute left-1/2 -translate-x-1/2 top-5 px-4 py-2 rounded w-max items-center gap-1 after:content-[""] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 group-hover:-top-11 ease-in-expo duration-200'>
                        Harigurus
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="feather feather-external-link"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </span>
                    <img 
                        className='max-w-[400px] mr-auto relative'
                        src="https://anuragsinghbam.netlify.app/images/harigurus.webp" 
                        alt="" 
                    />
                </div>
            </a>

            <div className="w-full">
                <h3 className="text-[#fc815c] font-bold text-4xl">
                    Harigurus
                </h3>
                <span className="text-[#fc815c] text-lg">
                    (Event Booking)
                </span>
                <p className="text-justify mt-2">
                    HariGurus is a one-stop-shop for all Hindu religious, customs and
                    traditional requirements. Built the complete site from scratch.
                </p>

                <ul className="flex flex-wrap gap-2 mt-2">
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #react.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #express.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #node.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #swiper.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #mongoDB
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #mongoose
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #css
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #javascript
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #figma
                    </li>
                </ul>
            </div>
        </div>

        {/* First Description then Image */}
        <div className="flex gap-[80px] items-center mt-12 relative">
            <div className="w-full">
                <h3 className="text-[#ffe578] font-bold text-4xl">
                    EazyGrad
                </h3>
                <span className="text-[#ffe578] text-lg">
                    (EdTech Startup)
                </span>
                <p className="text-justify mt-2">
                    Being a lead developer, revamped the site to a highly responsive,
                    and interactive website. Created new features and pages. Worked as a
                    team with product manager and ux designer.
                </p>

                <ul className="flex flex-wrap gap-2 mt-2">
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #react.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #express.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #node.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #swiper.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #mongoDB
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #mongoose
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #css
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #javascript
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #figma
                    </li>
                </ul>
            </div>

            <div className='h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2'></div>
            <div className='w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-black z-10 hover:scale-110 ease-in-out duration-100'></div>

            <a href="#" className='w-full flex'>
                <div className='relative group hover:scale-105 ease-in-out duration-200 ml-auto'>
                    <span className='flex text-black bg-[#ffe578] absolute left-1/2 -translate-x-1/2 top-5 px-4 py-2 rounded w-max items-center gap-1 after:content-[""] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 group-hover:-top-11 ease-in-expo duration-200'>
                        EazyGrad
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="feather feather-external-link"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </span>
                    <img 
                        className='max-w-[400px] relative'
                        src="https://anuragsinghbam.netlify.app/images/eazygrad.webp" 
                        alt="" 
                    />
                </div>
            </a>
        </div>

        {/* First Image then Discription */}
        <div className='flex gap-[80px] items-center mt-12 relative'>
            <div className='h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2'></div>
            <div className='w-4 h-4 rounded-full border-[3px] border-sky-600 absolute left-1/2 -translate-x-1/2 bg-black z-10 hover:scale-110 ease-in-out duration-100'></div>

            <a href="#" className='w-full flex relative'>
                <div className='relative group hover:scale-105 ease-in-out duration-200'>
                    <span className='flex bg-sky-600 absolute left-1/2 -translate-x-1/2 top-5 px-4 py-2 rounded w-max items-center gap-1 after:content-[""] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 group-hover:-top-11 ease-in-expo duration-200'>
                        Gym App
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="feather feather-external-link"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </span>
                    <img 
                        className='max-w-[400px] mr-auto relative'
                        src={GymApp} 
                        alt="Gym App" 
                    />
                </div>
            </a>

            <div className="w-full">
                <h3 className="text-sky-600 font-bold text-4xl">
                    GYM APP
                </h3>
                <span className="text-sky-600 text-lg">
                    (Gym Website)
                </span>
                <p className="text-justify mt-2">
                    This repository contains the frontend codebase for a Gym Application built using React. The application is designed to provide information about gym services, workout sessions, a BMI calculator, pricing details, a gallery, and a contact form.
                </p>

                <ul className="flex flex-wrap gap-2 mt-2">
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #react.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #express.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #node.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #mongoDB
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #mongoose
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #css
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #javascript
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #figma
                    </li>
                </ul>
            </div>
        </div>

        {/* First Description then Image */}
        <div className="flex gap-[80px] items-center mt-12 relative">
            <div className="w-full">
                <h3 className="text-green-400 font-bold text-4xl">
                    Task Manager
                </h3>
                <span className="text-green-400 text-lg">
                    (Task Assignment)
                </span>
                <p className="text-justify mt-2">
                    A full-featured web-based Task Management System built to streamline task assignment, tracking, and team collaboration. It includes powerful tools for both Admins and Users.
                </p>

                <ul className="flex flex-wrap gap-2 mt-2">
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #react.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #express.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #node.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #mongoDB
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #mongoose
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #css
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #javascript
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #figma
                    </li>
                </ul>
            </div>

            <div className='h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2'></div>
            <div className='w-4 h-4 rounded-full border-[3px] border-green-400 absolute left-1/2 -translate-x-1/2 bg-black z-10 hover:scale-110 ease-in-out duration-100'></div>

            <a href="#" className='w-full flex'>
                <div className='relative group hover:scale-105 ease-in-out duration-200 ml-auto'>
                    <span className='flex text-black bg-green-400 absolute left-1/2 -translate-x-1/2 top-5 px-4 py-2 rounded w-max items-center gap-1 after:content-[""] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 group-hover:-top-11 ease-in-expo duration-200'>
                        Task Manager
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="feather feather-external-link"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </span>
                    <img 
                        className='max-w-[400px] relative'
                        src={TaskManager} 
                        alt="Task Manager" 
                    />
                </div>
            </a>
        </div>

        <div className='w-[2px] bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2'></div>
    </div>
  )
}

export default ProjectSection;