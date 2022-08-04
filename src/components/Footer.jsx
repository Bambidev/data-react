import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4'>
        <div className="grid lg:grid-cols-3 gap-10 text-gray-300">
            <div className="">
                <h1 className=' w-full text-3xl font-bold text-[#00df9a] z-20'>Bambi<span className='text-white'>Data</span></h1>  
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi ducimus accusantium accusamus nesciunt. Dolor ad nemo sit quos corporis.</p>        
                <div className="flex md:w-[75%] my-6 justify-between">
                    <FaFacebookSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaInstagramSquare size={30}/>
                    <FaTwitterSquare size={30}/>
                </div>
            </div>

            <div className="lg:col-span-2 sm:flex sm:justify-between grid grid-cols-2 gap-10 text-center md:text-left mt-5">
                <div className="">
                    <h6 className='font-medium text-gray-300' >Soluciones</h6>
                    <ul>
                        <li className='py-2'>Análisis</li>
                        <li className='py-2'>Marketing</li>
                        <li className='py-2'>Comercio</li>
                        <li className='py-2'>Perspectivas</li>
                    </ul>
                </div>

                <div className="">
                    <h6 className='font-medium text-gray-300' >Soporte</h6>
                    <ul>
                        <li className='py-2'>Precios</li>
                        <li className='py-2'>Documentacion</li>
                        <li className='py-2'>Guias</li>
                        <li className='py-2'>API Estados</li>
                    </ul>
                </div>

                <div className="">
                    <h6 className='font-medium text-gray-300' >Compania</h6>
                    <ul>
                        <li className='py-2'>Sobre</li>
                        <li className='py-2'>Blog</li>
                        <li className='py-2'>Trabajos</li>
                        <li className='py-2'>Carrera</li>
                    </ul>
                </div>

                <div className="">
                    <h6 className='font-medium text-gray-300' >Legal</h6>
                    <ul>
                        <li className='py-2'>Reclamos</li>
                        <li className='py-2'>Politicas</li>
                        <li className='py-2'>Terminos</li>
                    </ul>
                </div>
            </div>
        </div>
        <p className='text-gray-300 text-center pt-16'>BambiData 2022 Copyright © Todos los derechos reservados</p>
        
    </div>
  )
}
