import React, { Component } from 'react'
import laptop from '../img/laptop.jpg'

export class Analytics extends Component {
  render() {
    return (
      <div className='w-full bg-white py-[13px] px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img  className='w-[500px] mx-auto my-4 animate-wiggle' src={laptop} alt="" />
          

          <div className="my-auto py-5 lg:py-0">
              <p className='shadow-xl shadow-[#00dbdf8e] sha bg-[#00df9a] py-2 px-4 rounded-lg font-extrabold text-black inline'>PANEL DE ANALISIS DE DATOS</p>
              <h1 className='md:text-4xl sm:tex-3xl text-2xl my-4 sm:mt-5 sm:mb-3 font-bold '>Gestionar el Análisis de Datos de Forma Centralizada</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam incidunt quos at soluta, sequi et qui asperiores deleniti ratione. Atque quia tempore, nostrum delectus quae sint temporibus voluptates iure velit!</p>
              <div className="text-center md:text-start">
              <button className='shadow-xl hover:shadow-[#00dbdf4d] bg-[#000000] transition-all ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-[#00df9a] rounded-md my-7 py-3 px-10 w-1/2 text-[#ffffff] font-bold'>Empezar</button></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Analytics