import React, { useState } from 'react'
import {navItems} from '../constants'
import {Menu, X} from "lucide-react"

const Navbar = () => {

    const[bars, setBars]=useState(false)
    const toggleNavbar=()=>{
        setBars(!bars);
    }

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src="logo.png" alt="logo" className='h-10 w-10 mr-2'/>
                    <span className="text-xl tracking-tight">ViR</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item,index)=>(
                        <li key={index} className='hover:border-b font-semibold'>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                    <a href="#" className='bg-gradient-to-r from-purple-500 to-purple-800 px-3 py-2 rounded-md'>Create an account</a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {bars ? <X/> : <Menu/>}
                    </button>
                </div>
            </div>
            {bars && (
                <div className='font-verdana fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                    <ul>
                        {navItems.map((item,index)=>(
                            <li key={index} className='py-2 my-4 hover:border-b font-semibold'>
                               <a href={item.href}>{item.label}</a> 
                            </li>
                        ))}
                    </ul>
                    <div className='flex space-x-6 mt-5'>
                        <a href="#" className='py-2 px-3 rounded-md border'>
                            Sign In
                        </a>
                        <a href="#" className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>
                            Create an account
                        </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar