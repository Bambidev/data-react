import React, {useState} from 'react';
import {AiOutlineMenu , AiOutlineClose, AiFillInstagram, AiFillLinkedin, AiOutlineFacebook } from 'react-icons/ai';
import { FaGripLinesVertical } from 'react-icons/fa';

export const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            
            <div className='hidden md:fixed md:flex md:items-center md:justify-between md:w-full md:left-0 md:px-5 md:z-30 md:backdrop-blur-xl md:top-0'>
                <h1 className=' w-full text-3xl font-bold text-[#00df9a] z-20'>Bambi<span className='text-white'>Data</span></h1>  
                <ul className='hidden md:flex font-semibold z-20'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>Compania</li>
                    <li className='p-4'>Recursos</li>
                    <li className='p-4'>Nosotros</li>
                    <li className='p-4'>Contacto</li>
                </ul>
            </div>

            <div className='md:hidden bg-black bg-opacity-60 backdrop-blur-xl top-0 py-5 flex items-center justify-between fixed w-full z-50 left-0 px-5 '>
                <h1 className='md:hidden sm:flex w-full text-3xl font-bold text-[#00df9a] z-20'>Bambi<span className='text-white'>Data</span></h1>
                <div onClick={handleNav} className='md:hidden z-50'>
                    {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
                </div>
            </div>
        
        <div className={nav ? 'fixed z-10 top-0 left-0 w-[100%] h-full bg-black bg-opacity-80 backdrop-blur-xl border-r border-r-gray-600 duration-500 ' : 'fixed top-[-100%] h-full left-0 w-[100%] duration-500 z-10 '}>
            
            <ul className='p-4 font-semibold text-center mt-20'>
                <li className='p-5 border-b w-1/2 mx-auto border-gray-600'>Home</li>
                <li className='p-5 border-b w-1/2 mx-auto border-gray-600'>Compania</li>
                <li className='p-5 border-b w-1/2 mx-auto border-gray-600'>Recursos</li>
                <li className='p-5 border-b w-1/2 mx-auto border-gray-600'>Nosotros</li>
                <li className='p-5'>Contacto</li>
            </ul>

            <div className='md:hidden flex flex-col h-[10%] justify-end'>
                <ul className='flex justify-center items-center py-3'>
                    <li className='px-4 hover:text-orange-500 cursor-pointer'><AiFillInstagram size={20}/></li>
                    <li><FaGripLinesVertical/></li>
                    <li className='px-4 hover:text-blue-400 cursor-pointer'><AiFillLinkedin size={20}/></li>
                    <li><FaGripLinesVertical/></li>
                    <li className='px-4 hover:text-blue-800 cursor-pointer'><AiOutlineFacebook size={20}/></li>
                </ul>
                <p className='text-center font-medium text-xs'>BambiData® | 2022</p>
            </div>
        </div>
    </div>
  )
}
