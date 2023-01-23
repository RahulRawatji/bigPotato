import React from 'react';
import { BsSpotify, BsFacebook, BsPinterest, BsInstagram, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (<>    <div className='flex gap-10 m-10 border-y-2 p-5'>
        <div className='flex flex-col gap-4'>
            <h2 className='text-lg'>About Us</h2>
            <ul className='flex flex-col gap-6'>
                <li className='text-md text-slate-500 font-light'>Our Company</li>
                <li className='text-md text-slate-500 font-light'>Our Coffee</li>
                <li className='text-md text-slate-500 font-light'>Stories and News</li>
                <li className='text-md text-slate-500 font-light'>Starbuck Archives</li>
                <li className='text-md text-slate-500 font-light'>Inverstor Relation</li>
                <li className='text-md text-slate-500 font-light'>Customer Service</li>
            </ul>
        </div>
        <div className='flex flex-col gap-4'>
            <h2 className='text-lg'>Careers</h2>
            <ul className='flex flex-col gap-6'> 
                <li className='text-md text-slate-500 font-light'>Culture and Values</li>
                <li className='text-md text-slate-500 font-light'>Our Coffee</li>
                <li className='text-md text-slate-500 font-light'>Alumni Community</li>
                <li className='text-md text-slate-500 font-light'>U.S Careers</li>
                <li className='text-md text-slate-500 font-light'>International Careers</li>
            </ul>
        </div>
        <div className='flex flex-col gap-4'>
            <h2 className='text-lg'>Social Impact</h2>
            <ul className='flex flex-col gap-6'>
                <li className='text-md text-slate-500 font-light'>People</li>
                <li className='text-md text-slate-500 font-light'>Planet</li>
                <li className='text-md text-slate-500 font-light'>Stories and News</li>
                
            </ul>
        </div>
        <div className='flex flex-col gap-4'>
            <h2 className='text-lg'>For Business Partners</h2>
            <ul className='flex flex-col gap-6'>
                <li className='text-md text-slate-500 font-light'>Landlord Support Center</li>
                <li className='text-md text-slate-500 font-light'>Suppliers</li>
                <li className='text-md text-slate-500 font-light'>Office and Foodservice Coffee</li>
                
            </ul>
        </div>
        <div className='flex flex-col gap-4 w-40'>
            <h2 className='text-lg'>Order and Pickup</h2>
            <ul className='flex flex-col gap-6'>
                <li className='text-md text-slate-500 font-light'>Order on the App</li>
                <li className='text-md text-slate-500 font-light'>Order on the Web</li>
                <li className='text-md text-slate-500 font-light'>Delivery</li>
                <li className='text-md text-slate-500 font-light'>Explore and Find Coffee for Home</li>
                
            </ul>
        </div>
        
    </div>
    <div className='px-10 flex gap-5 py-3'>
        <BsSpotify size={30}/>
        <BsFacebook size={30}/>
        <BsPinterest size={30}/>
        <BsInstagram size={30} color="white" style={{"backgroundColor":'black'}}/>
        <BsYoutube size={30}/>
        <AiFillTwitterCircle size={30}/>
    </div>
    <ul className='flex my-4 px-10 gap-5'>
        <li>Privacy Notice</li><span>|</span>
        <li>Terms of Use</li><span>|</span>
        <li>Do Not Share My Personal Information</li><span>|</span>
        <li>CA Supply Chain Act</li><span>|</span>
        <li>Cookies Preferences</li>
    </ul>
    <div className='px-10 text-sm pb-8'>
        <h3 className='text-slate-400'>© 2023 Starbucks Coffee Company. All rights reserved.</h3>
    </div>
    </>

  )
}

export default Footer