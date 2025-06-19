import React, { useRef, useState } from 'react';
import contactMe from '../assets/Images/contact-me.svg';
import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { HiMail, HiUser, HiPaperAirplane  } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const customTheme = {
  field: {
    input: {
      base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      colors: {
        gray: "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#1788ae] focus:ring-[#1788ae] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-[#1788ae] dark:focus:border-[#1788ae]"
      }
    }
  }
};

const customTextareaTheme = {
  base: "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50",
  colors: {
    gray:
      "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#1788ae] focus:ring-[#1788ae] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-[#1788ae] dark:focus:ring-[#1788ae]",
  },
};

const customButtonTheme = {
  color: {
    customBlue:
      "text-white bg-[#1788ae] border border-transparent enabled:hover:bg-[#14779d] focus:ring-4 focus:ring-[#1788ae]/50 dark:focus:ring-[#1788ae]/40",
  },
};

const Contact = () => {

  const [, setIsSend] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_qbu8zs8",      // Service ID
    "template_jp52vdk",     // Template ID
    form.current,
    "vK_lyfVRLNT-aw7d0",      // PublicKey
  )
  .then(() => {
    setIsSend(true)
    form.current.reset()      // Reset Form field after sending
    toast.success("Message send successfully. ✅", {
      position : "top-right",
      autoClose : 3000,
      hideProgressBar : false,
      closeOnClick : true,
      pauseOnHover : true,
      draggable : true,
      theme : "dark"
    });
  },
  (error) => {
    toast.error("Error sending Message!", error, {
      position : "top-right",
      autoClose : 3000,
      hideProgressBar : false,
      closeOnClick : true,
      pauseOnHover : true,
      draggable : true,
      theme : "dark"
    });
  })
};

  return (
    <div className='flex flex-col md:flex-row items-center mt-10'>
        {/* Image */}
        <div className='w-full'>
            <img src={contactMe} alt="Contact Me" />
        </div>

        {/* Form  */}
        <ToastContainer />
        <form 
          ref={form}
          onSubmit={sendEmail}
          className="w-full" 
          name='contactUS' 
          netlify
        >
            <div className="mb-2 block">
                <Label htmlFor="name">Name</Label>
            </div>
            <div className='mb-4'>
                <TextInput 
                    name='name'
                    type="text" 
                    icon={HiUser} 
                    placeholder="Enter your name"
                    theme={customTheme}
                    required 
                />
            </div>

            <div className="mb-2 block">
                <Label htmlFor="email">Email</Label>
            </div>
            <div className='mb-4'>
                <TextInput  
                    name='email'
                    type="email" 
                    icon={HiMail} 
                    placeholder="name@xyz.com"
                    theme={customTheme}
                    required 
                />
            </div>

            <div className="mb-2 block">
                <Label htmlFor="message">Message</Label>
            </div>
            <div className='mb-4'>
                <Textarea  
                    name='message'
                    placeholder="Leave a message..." 
                    required rows={8} 
                    theme={customTextareaTheme}
                />
            </div>

            <Button 
                type="submit"
                color="customBlue"
                theme={customButtonTheme}
                className="w-full text-white mt-4 flex items-center gap-2"
            >
                <HiPaperAirplane className="w-5 h-5 rotate-45" />
                Send Message
            </Button>
        </form>
    </div>
  )
}

export default Contact;