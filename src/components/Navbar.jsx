import React, {useState} from 'react';
import {AiOutlineMenu , AiOutlineClose } from 'react-icons/ai';

export const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Bambi<span className='text-white'>Data</span></h1>
        <ul className='hidden md:flex font-semibold'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Compania</li>
            <li className='p-4'>Recursos</li>
            <li className='p-4'>Nosotros</li>
            <li className='p-4'>Contacto</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full backdrop-blur-xl border-r border-r-gray-600 duration-500' : 'fixed left-[-100%] top-0 h-full w-[60%] duration-500'}>

            <h1 className='w-full text-3xl font-bold text-[#00df9a] mx-4 my-[30px]'>Bambi<span className='text-white'>Data</span></h1>

            <ul className='p-4 font-semibold'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Compania</li>
                <li className='p-4 border-b border-gray-600'>Recursos</li>
                <li className='p-4 border-b border-gray-600'>Nosotros</li>
                <li className='p-4'>Contacto</li>
            </ul>
        </div>
    </div>
  )
}
