import React from 'react'
import { Parallax } from 'react-parallax'
import part from '../img/part.jpg'

const Newsletter = () => {
  return (
    <Parallax className='image' bgImage={part} strength={800}>
    <div className='w-full py-14 text-white bg-black bg-opacity-60'>
        
        <div className="max-w-[1240px] px-5 md:grid grid-cols-2 lg:grid-cols-3 mx-auto">

            <div className="lg:col-span-2">
                <h1 className='font-bold text-xl md:text-2xl'>Quiere consejos y trucos para optimizar su flujo?</h1>
                <p>Suscribase al newsletter y mantente al dia! </p>
            </div>

            <div className="">

                <div className="mt-10 md:mt-0 my-3 flex md:flex-row flex-col md:justify-between gap-2 mt-5 lg:mt-0">
                    <input className='w-[90%] mx-auto md:mx-0 md:w-2/3 px-4 rounded-xl text-[#16656b] font-bold py-3' type="email" 
                    placeholder='Introduzca su email'/>
                    <button className='shadow-xl hover:shadow-[#00dbdf4d] bg-[#00df9a] transition-all ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-white  rounded-xl text-black font-bold py-3 px-4 md:w-1/3 w-1/2 mx-auto md:mx-0'>Notificarme</button>
                </div>

                <p className='font-semibold'>Nos preocupamos por la protección de sus datos. Lea nuestra <span className='text-[#00df9a]'>política de privacidad.</span></p>

            </div>
        </div>
    </div>
    </Parallax>
  )
}

export default Newsletter