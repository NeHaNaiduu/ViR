import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from '../constants'
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='mt-20 border-t py-10 border-neutral-700'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            <div>
                <h3 className='text-md font-semibold mb-4'>
                    Resources
                </h3>
                <ul className='space-y-2'>
                    {resourcesLinks.map((link,index)=>(
                        <li key={index}>
                            <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-md font-semibold mb-4'>
                    Platform
                </h3>
                <ul className='space-y-2'>
                    {platformLinks.map((link,index)=>(
                        <li key={index}>
                            <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-md font-semibold mb-4'>
                    Community
                </h3>
                <ul className='space-y-2'>
                    {communityLinks.map((link,index)=>(
                        <li key={index}>
                            <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='flex flex-col justify-between w-full h-16 sm:flex-row border-t border-neutral-700 mt-10'>
            <div className='pt-5 mb-5'>
                Copyright@NehaNaidu/2024
            </div>
            <div className='socials flex items-center justify-between w-1/2 sm:w-1/3 lg:w-1/4'>
                <a href="#"><FaFacebookF className='text-purple-500 hover:scale-150 duration-150 cursor-pointer'/></a>
                <a href="#"><FaGithub className='text-purple-500 hover:scale-150 duration-150 cursor-pointer'/></a>
                <a href="#"><FaXTwitter className='text-purple-500 hover:scale-150 duration-150 cursor-pointer'/></a>
                <a href="#"><FaPinterestP className='text-purple-500 hover:scale-150 duration-150 cursor-pointer'/></a>
                <a href="#"><FaInstagram className='text-purple-500 hover:scale-150 duration-150 cursor-pointer'/></a>
                <a href="#" className='text-white'><FaYoutube className='text-purple-500 hover:scale-150 duration-150 cursor-pointer'/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer