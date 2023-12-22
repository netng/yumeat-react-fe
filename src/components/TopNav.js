import React, { useState } from 'react'
import {
    AiOutlineMenu,
    AiOutlineSearch,
    AiOutlineClose,
    AiFillTag
} from 'react-icons/ai'

import {BsCartFill, BsPerson, BsSignIntersectionSide} from 'react-icons/bs'
import { TbTruckReturn } from 'react-icons/tb'
import { FaUserFriend, FaGoogleWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp, MdOutline10K } from 'react-icons/md'

const TopNav = () => {
    const [sideNav, setSideNav] = useState(false)
    console.log(sideNav)

    return (
        <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>

            <div className='flex items-center'>
                <div className='cursor-pointer'>
                    <AiOutlineMenu 
                        size={25} 
                        onClick={() => setSideNav(!sideNav)}
                    />
                </div>
                <h1 className='px-2 text-2xl sm:text-3xl lg:text-4xl'>
                    Yum
                    <span className='font-bold'>Eats</span>
                </h1>
                
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-orange-700 rounded-full p-2 text-white font-bold'>Free</p>
                    <p className='p-2 font-bold'>Delivery</p>
                </div>

            </div>
            
            <div className='bg-gray-200 flex items-center px-2 rounded-full w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input className='bg-transparent w-full focus:outline-none p-1'
                    placeholder='search meals'/>
            </div>

            <button className='bg-orange-700 rounded-full hidden md:flex text-white py-2 items-center'>
                <BsCartFill size={20} /> Cart
            </button>

            { sideNav? (
                <div className='bg-black/60 w-full h-screen fixed z-10 top-0 left-0'
                    onClick={() => setSideNav(!sideNav)}>
                </div>
            ) : ""}
            

            <div className={
                sideNav ? 
                    'bg-white w-[300px] z-10 h-screen fixed top-0 left-0 duration-500'
                    : 
                    'bg-white w-[300px] z-10 h-screen fixed top-0 left-[-100%] duration-500'}
            >
                <AiOutlineClose
                    size={25}
                    onClick={() => setSideNav(!sideNav)}
                    className='cursor-pointer absolute top-4 right-4'
                />
                <h2 className='p-4 text-2xl'>
                    Yum
                    <span className='text-orange-700 font-bold'>Eats</span>
                </h2>

                <nav>
                    <ul className='flex flex-col p-4 text-gray-900'>
                        <li className='flex text-xl py-4 items-center'>
                            <BsPerson size={25} className='rounded-full bg-black text-white mr-4'/>
                            My Account
                        </li>
                        <li className='flex text-xl py-4 items-center'>
                            <TbTruckReturn size={25} className='rounded-full bg-black text-white mr-4'/>
                            Delivered
                        </li>
                        <li className='flex text-xl py-4 items-center'>
                            <MdFavorite size={25} className='rounded-full bg-black text-white mr-4'/>
                            My Favorite
                        </li>
                        <li className='flex text-xl py-4 items-center'>
                            <FaGoogleWallet size={25} className='rounded-full bg-black text-white mr-4'/>
                            My Wallet
                        </li>
                        <li className='flex text-xl py-4 items-center'>
                            <MdHelp size={25} className='rounded-full bg-black text-white mr-4'/>
                            Help
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default TopNav