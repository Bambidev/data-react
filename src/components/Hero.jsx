import React from 'react'
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mx-auto text-center w-full h-[89vh] flex flex-col justify-center'>

            <p className='md:p-0 uppercase font-bold text-[#00df9a] p-1'>crecer con análisis de datos</p>
            <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-3'>Crecer con datos</h1>

            <div className='flex justify-center items-center'>

              <p className='md:text-2xl sm:text-xl text-1xl font-bold'>Rapido, financiacion flexible para </p>

              <p className='md:text-3xl sm:text-xl text-1xl font-bold text-[#00df9a] pl-2 md:py-1 py-2'>
              <Typewriter 
                options={{ 
                  strings: ['BTB', 'BTC', 'SASS'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 2000
                }}
              />
              </p>

            </div>

            <p className='md:text-2xl text-xl font-bold text-gray-600 '>Supervise sus análisis de datos para aumentar los ingresos de las plataformas BTB, BTC, & SASS.</p>

            <button className='bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black font-bold  '>Empezar</button>
        </div>
    </div>
  )
}

