import React from 'react';
import GymApp from "../assets/Images/Gym-App.webp";
import TaskManager from "../assets/Images/Task-Manager.webp";
import ResumeBuilder from "../assets/Images/Resume-Builder.webp";
import InterviewPrepAI from "../assets/Images/Interview-Prep-AI.webp";
import LMS from "../assets/Images/LMS.webp";


const ProjectSection = () => {
  return (
    <div>
        {/* First Image then Discription [Task Management] */}
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-[80px] items-center mt-12 sm:mt-20 relative'>
            <div className='h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block'></div>
            <div className='w-4 h-4 rounded-full border-[3px] border-green-400 absolute left-1/2 -translate-x-1/2 bg-black z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block'></div>

            <a href="https://task-manager-frontend-29ij.onrender.com" className='w-full flex relative justify-center sm:justify-start'>
                <div className='flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200'>
                    <img 
                        className='max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]'
                        src={TaskManager} 
                        alt="Task Manager" 
                    />
                    <span className='flex text-black bg-green-400 sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-4 py-2 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 group-hover:-top-18 ease-in-expo duration-200'>
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
                </div>
            </a>

            <div className="w-full">
                <h3 className="text-green-400 font-bold text-2xl md:text-4xl">
                    Task Manager
                </h3>
                <span className="text-green-400 text-base md:text-lg">
                    (Smart Task Planner)
                </span>
                <p className="text-justify text-sm md:text-base mt-2">
                    A comprehensive web-based Task Management System designed to simplify task delegation, progress tracking, and team collaboration. Equipped with robust features tailored for both Admins and Users.
                </p>

                <ul className="flex flex-wrap gap-2 mt-2">
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #react.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #express.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #node.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #mongoDB
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #mongoose
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #css
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #javascript
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #figma
                    </li>
                </ul>
            </div>
        </div>

        {/* First Description then Image [Interview Prep AI] */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[80px] items-center mt-12 sm:mt-20 relative">
            <div className="w-full order-2 sm:order-1">
                <h3 className="text-yellow-300 font-bold text-2xl md:text-4xl">
                    Interview Prep AI
                </h3>
                <span className="text-yellow-300 text-base md:text-lg">
                    (The Smart Way to Ace Your Next Interview)
                </span>
                <p className="text-justify text-sm md:text-base mt-2">
                    Interview Prep AI is a cutting-edge web application powered by the MERN stack and integrated with the Gemini API. It intelligently personalizes interview preparation by generating tailored questions and answers based on specific job roles and experience levels. Users can deepen their understanding with AI-generated concept explanations and streamline their study process through organized notes and pinned questions. This platform is designed to provide a comprehensive and adaptive learning experience, empowering users to confidently ace their interviews.
                </p>

                <ul className="flex flex-wrap gap-2 mt-2">
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #react.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #express.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #node.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #mongoDB
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #mongoose
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #css
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #javascript
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #figma
                    </li>
                </ul>
            </div>

            <div className='h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block'></div>
            <div className='w-4 h-4 rounded-full border-[3px] border-yellow-300 absolute left-1/2 -translate-x-1/2 bg-black z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block'></div>

            <a href="https://interview-prep-ai-frontend.onrender.com" className='w-full order-1 sm:order-2 flex justify-center sm:justify-start relative'>
                <div className='flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto'>
                    <img 
                        className='max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]'
                        src={InterviewPrepAI} 
                        alt="Interview Prep AI" 
                    />
                    <span className='flex text-black bg-yellow-300 sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-4 py-2 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 group-hover:-top-16 ease-in-expo duration-200'>
                        Interview Prep AI
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
                </div>
            </a>
        </div>

        {/* First Image then Discription [Resume Builder] */}
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-[80px] items-center mt-12 sm:mt-20 relative'>
            <div className='h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block'></div>
            <div className='w-4 h-4 rounded-full border-[3px] border-[#9f7fdd] absolute left-1/2 -translate-x-1/2 bg-black z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block'></div>

            <a href="https://resume-builder-app-i9y7.onrender.com" className='w-full flex relative justify-center sm:justify-start'>
                <div className='flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200'>
                    <img 
                        className='max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]'
                        src={ResumeBuilder}
                        alt="Resume Builder" 
                    />
                    <span className='flex text-white bg-[#9f7fdd] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-4 py-2 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 group-hover:-top-16 ease-in-expo duration-200'>
                        Resume Builder App
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
                </div>
            </a>

            <div className="w-full">
                <h3 className="text-[#9f7fdd] font-bold text-2xl md:text-4xl">
                    Resume Builder App
                </h3>
                <span className="text-[#9f7fdd] text-base md:text-lg">
                    (The Smart Way to Build Your Resume)
                </span>
                <p className="text-justify text-sm md:text-base mt-2">
                    An intuitive resume builder designed to help individuals create compelling, industry-optimized resumes that stand out to recruiters and lead to greater career opportunities.
                </p>

                <ul className="flex flex-wrap gap-2 mt-2">
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #react.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #express.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #node.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #mongoDB
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #mongoose
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #css
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #javascript
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #figma
                    </li>
                </ul>
            </div>
        </div>

        {/* First Description then Image [Gym App] */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[80px] items-center mt-12 sm:mt-20 relative">
            <div className="w-full order-2 sm:order-1">
                <h3 className="text-sky-600 font-bold text-2xl md:text-4xl">
                    Gym App
                </h3>
                <span className="text-sky-600 text-base md:text-lg">
                    (Empowering Workouts Through Technology)
                </span>
                <p className="text-justify text-sm md:text-base mt-2">
                    A React-based frontend for a dynamic Gym Application, featuring workout plans, service highlights, BMI calculation, pricing information, a media gallery, and a user-friendly contact form.
                </p>

                <ul className="flex flex-wrap gap-2 mt-2">
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #react.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #express.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #node.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #mongoDB
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #mongoose
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #css
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #javascript
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #figma
                    </li>
                </ul>
            </div>

            <div className='h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block'></div>
            <div className='w-4 h-4 rounded-full border-[3px] border-sky-600 absolute left-1/2 -translate-x-1/2 bg-black z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block'></div>

            <a href="https://gym-app-frontend-liart.vercel.app" className='w-full order-1 sm:order-2 flex justify-center sm:justify-start relative'>
                <div className='flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto'>
                    <img 
                        className='max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]'
                        src={GymApp} 
                        alt="Gym App" 
                    />
                    <span className='flex text-white bg-sky-600 sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-4 py-2 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 group-hover:-top-16 ease-in-expo duration-200'>
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
                </div>
            </a>
        </div>

        {/* First Image then Discription [LMS] */}
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-[80px] items-center mt-12 sm:mt-20 relative'>
            <div className='h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block'></div>
            <div className='w-4 h-4 rounded-full border-[3px] border-orange-400 absolute left-1/2 -translate-x-1/2 bg-black z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block'></div>

            <a href="https://lms-frontend-blond-psi.vercel.app" className='w-full flex relative justify-center sm:justify-start'>
                <div className='flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200'>
                    <img 
                        className='max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]'
                        src={LMS} 
                        alt="LMS" 
                    />
                    <span className='flex text-black bg-orange-400 sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-4 py-2 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 group-hover:-top-18 ease-in-expo duration-200'>
                        Learning Management System
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
                </div>
            </a>

            <div className="w-full">
                <h3 className="text-orange-400 font-bold text-2xl md:text-4xl">
                    Learning Management System (LMS)
                </h3>
                <span className="text-orange-400 text-base md:text-lg">
                    (Empowering Digital Education Through Smart Technology)
                </span>
                <p className="text-justify text-sm md:text-base mt-2">
                    A web-based platform developed using React.js, offering an intuitive and interactive interface for both students and instructors. It enables users to browse and enroll in courses, access educational materials and monitor their learning progress efficiently.
                </p>

                <ul className="flex flex-wrap gap-2 mt-2">
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #react.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #express.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #node.js
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #mongoDB
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #mongoose
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #css
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #javascript
                    </li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                        #figma
                    </li>
                </ul>
            </div>
        </div>



        <div className='w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2'></div>
    </div>
  )
}

export default ProjectSection;