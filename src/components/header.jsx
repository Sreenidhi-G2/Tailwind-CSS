import React from 'react'
import { FaBars } from "react-icons/fa6";
const header = () => {
    return (
        <div className='flex justify-between text-white'>
            <div className='flex items-center justify-center gap-2 text-white'>
                <img src='public\assets\Logo.svg' alt='logo'></img>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs px-2 py-2">Hoster is hiring </button>
            </div>
            <ul className=' hidden lg:flex gap-4 font-roboto'>
                <li><a href='#'>Plans</a></li>
                <li><a href='#'>Find Domain</a></li>
                <li><a href='#'>Why Hoster</a></li>
            </ul>
            <div className=' hidden lg:flex gap-4 font-roboto'>
                <a  className=" "href='#'>Sign in</a>
                <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-700 text-white'>Join Waitlist</button>

            </div>
            <div className='lg:hidden'> 
                <FaBars />
            </div>
        </div>
    )
}
export default header