import React from 'react'
import single from '../img/single.png'
import double from '../img/double.png'
import triple from '../img/triple.png'


export const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">

          {/* CARD */}
          <div className="w-full shadow-xl shadow-gray-400 flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300 border"> 
          <img className='w-20 mx-auto bh' src={single} alt="" />
          <h2 className='text-2xl font-bold  text-center py-8'>Single User</h2> 
          <p className='text-center text-4xl font-extrabold'>$149</p>
          <div className="text-center font-medium flex items-center justify-center gap-4 my-5">
            <div className="">
              <p className='py-2 border-b-2 border-gray-300'>📦></p>
              <p className='py-2 border-b-2 border-gray-300'>👤></p>
              <p className='py-2 border-b-2 border-gray-300'>⚡></p>
            </div>
            <div className="text-left ">
            <p className='py-2 border-b-2 border-gray-300'>500Gb Storage</p>  
              <p className='py-2 border-b-2 border-gray-300'>1 Usuario</p>  
              <p className='py-2 border-b-2 border-gray-300'>Hasta 2gb de Envio</p>  
            </div>
          </div>
            <button className='shadow-xl hover:shadow-[#00dbdf4d] bg-[#00df9a] transition-all ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-white w-[200px] rounded-md my-7 mx-auto py-3 text-black font-bold' >Comenzar</button>
          </div>

          {/* CARD */}
          <div className="w-full shadow-xl shadow-gray-400 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300 border"> 
          <img className='w-20 mx-auto bh' src={double} alt="" />
          <h2 className='text-2xl font-bold  text-center py-8'>Single User</h2> 
          <p className='text-center text-4xl font-extrabold'>$149</p>
          <div className="text-center font-medium flex items-center justify-center gap-4 my-5">
            <div className="">
              <p className='py-2 border-b-2 border-gray-300'>📦></p>
              <p className='py-2 border-b-2 border-gray-300'>👤></p>
              <p className='py-2 border-b-2 border-gray-300'>⚡></p>
            </div>
            <div className="text-left ">
            <p className='py-2 border-b-2 border-gray-300'>500Gb Storage</p>  
              <p className='py-2 border-b-2 border-gray-300'>1 Usuario</p>  
              <p className='py-2 border-b-2 border-gray-300'>Hasta 2gb de Envio</p>  
            </div>
          </div>
            <button className='shadow-xl hover:shadow-[#00dbdf4d] bg-[#000000] transition-all ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-[#00df9a] w-[200px] rounded-md my-7 mx-auto py-3 text-white font-bold' >Comenzar</button>
          </div>

          <div className="w-full shadow-xl shadow-gray-400 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border"> 
          <img className='w-20 mx-auto bh' src={triple} alt="" />
          <h2 className='text-2xl font-bold  text-center py-8'>Single User</h2> 
          <p className='text-center text-4xl font-extrabold'>$149</p>
          <div className="text-center font-medium flex items-center justify-center gap-4 my-5">
            <div className="">
              <p className='py-2 border-b-2 border-gray-300'>📦></p>
              <p className='py-2 border-b-2 border-gray-300'>👤></p>
              <p className='py-2 border-b-2 border-gray-300'>⚡></p>
            </div>
            <div className="text-left ">
            <p className='py-2 border-b-2 border-gray-300'>500Gb Storage</p>  
              <p className='py-2 border-b-2 border-gray-300'>1 Usuario</p>  
              <p className='py-2 border-b-2 border-gray-300'>Hasta 2gb de Envio</p>  
            </div>
          </div>
            <button className='shadow-xl hover:shadow-[#00dbdf4d] bg-[#00df9a] transition-all ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-white w-[200px] rounded-md my-7 mx-auto py-3 text-black font-bold' >Comenzar</button>
          </div>
          
        </div>

    </div>
  )
}
