import React, { useEffect, useState } from 'react'
import Logo from '../../assets/logo.png'
import { IoSearch } from "react-icons/io5";
import { GoHeartFill } from 'react-icons/go';
import { HiShoppingBag } from 'react-icons/hi2';
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />


import Wishlist from '../WishList/Wishlist';


const Navbar = ({ handleScroll, setSearchTerm, isScrolled, handlePanel, totalItems, Wishlist }) => {
  const [isOpen, setIsOpen] = useState(false); // ✅ This is missing and required

// const Navbar = ({handleScroll, setSearchTerm, isScrolled, handlePanel, totalItems, Wishlist}) => {






  return (
    // <header className='{bg-white fixed top-0 left-0 right-0 z-30 ${isScrolled ? 'shadow-lg' : ''}'}>
    <header className={`bg-white fixed top-0 left-0 right-0 z-30 ${isScrolled ? 'shadow-lg' : ''}`}>
        <nav className='max-w-[1300px] px-12h bg-white-400 mx-auto h-[14vh] flex items-center justify-between'>

               {/* Logo */}
            <a href="#" className='flex w-15 h-15 bg-zinc-100 rounded-full p-2'>
                <img src={Logo} className='w-fill h-full object-contain'/>
            {/* Website Name */}
            <span
                className="ml-3 text-5xl font-semibold text-blue-700 tracking-wider"
                style={{ fontFamily: "'Poppins', sans-serif" }}
            >
                KinMeL
            </span>
                
            </a>
            

            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-10 text-xl font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <li>
                <a href="#about" className="hover:text-blue-600 transition">About Us</a>
            </li>
            <li>
                <a href="#products" className="hover:text-blue-600 transition">Products</a>
            </li>
            <li>
                <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            </li>
            <li>
                <a href="#blog" className="hover:text-blue-600 transition">Blog</a>
            </li>
            </ul>

            {/* Mobile Hamburger */}
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
            >
            <svg
                className="w-7 h-7 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
            </button>
        

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
                <ul className="flex flex-col space-y-4 p-6 text-lg font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <li>
                    <a href="#about" className="block hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>About Us</a>
                    </li>
                    <li>
                    <a href="#products" className="block hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Products</a>
                    </li>
                    <li>
                    <a href="#contact" className="block hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Contact</a>
                    </li>
                    <li>
                    <a href="#blog" className="block hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Blog</a>
                    </li>
                </ul>
                </div>
            )}
            
             
            {/* Nav Actions */}
            <div className='flex items-center gap-x-5'>

                {/* Search Bar */}
                <div className='flex p-1 rounded-full border-2 border-blue-600'>
                   <input type="text" name="search" id="search" placeholder='Search...' autoComplete='off' className='h-[5vh] pl-4 flex-1 focus:outline-none'
                   onFocus={handleScroll}
                   onChange={(e)=>setSearchTerm(e.target.value)}/>
                   <button className='flex justify-center items-center w-10 h-10 rounded-full bg-blue-600 text-white  text-xl'>
                       <IoSearch />
                   </button>
                </div>



                {/* Icons */}
               {/* heart  */}
                <button className='text-[1.7rem] text-zinc-800 relative cursor-pointer 'onClick={() => handlePanel('wishlist')}>
                    <GoHeartFill />
                  
                        {
                        Wishlist.length > 0 && 
                          <span className='flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-4 right-4 border-2 border-white'>
                            {Wishlist.length}

                        

                    </span>
                   }
                </button>

                


                {/* shopping-bag */}
                <button className='text-[1.7rem] text-zinc-800 relative cursor-pointer ' onClick={()=> handlePanel('cart')}>
                    <HiShoppingBag />
                     {
                        totalItems > 0 && 
                        
                    <span className='flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-4 right-4 border-2 border-white'>
                        {totalItems}
                       
                    </span>
                
                    }
                </button>
            </div>
        
        </nav>
    </header>
  )
}

export default Navbar