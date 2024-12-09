// import React from 'react'
 import { IoIosHeart } from "react-icons/io";
 import { BiSolidBell } from "react-icons/bi";
 import { IoMdSettings } from "react-icons/io";
 import { CiSearch } from "react-icons/ci";



export default function Navbar  ()  {
  return (
    <header className="bg-white shadow-md flex items-center justify-between px-6 py-4">
      <h1 className="text-xl font-bold text-blue-600">MORENT</h1>
     
      <input
    
       
        type="search"
        placeholder="Search something here"
        className="border rounded-lg px-4 py-2 w-1/3"
        />
       
      <div className="flex items-center space-x-4">

      
       
        <IoIosHeart className='text-2xl '/>
    <BiSolidBell  className='text-2xl'/>
    <IoMdSettings className='text-2xl ' />

      
        <img
          src="/images/profile.jpg"
          alt="User"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
};


