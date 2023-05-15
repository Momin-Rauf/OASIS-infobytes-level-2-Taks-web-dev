import { useState } from 'react'
import React from 'react'
import './App.css'
import COC from "./images/COC.jpg"
import Kings from "./images/Kings.jpg"
import UCL from "./images/UCL.jpg"
import laliga from "./images/laliga.jpg"
import copa from "./images/copa.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <div className='bg-blue-100 shadow-md shadow-black h-auto w-full md:w-full flex flex-col'>
      <div className=' text-white shadow-md shadow-white  font-bold text-2xl  p-5 bg-blue-700 justify-center items-center  rounded-b-xl h-32 ' >
        <p>REAL MADRID</p> <p>The Kings of Europe</p>
      </div>
      <div className='bg-blue-500 m-20  border-[4px] shadow-lg shadow-white  mx-10 flex flex-col justify-center items-center md:h-auto h-auto rounded-3xl' >
        <div className='h-auto md:h-auto  border-[4px] shadow-md shadow-white m-10 flex justify-center p-5 text-white text-xl font-bold items-center flex-col  ' ><p className='bg-blue-700 rounded-xl p-2 hover:bg-blue-900 m-2' >club of the century</p> <div><img className='m-5' src={COC} alt="COC" /></div> </div>
        <div className='h-80 md:h-auto     border-[4px] shadow-md shadow-white flex justify-center p-5 text-white text-xl   font-bold items-center flex-col  ' ><div><img className='w-full mt-3 ' src={Kings} alt="kings" /></div></div> 
        <div className='h-80 m-10 md:h-auto  border-[4px] shadow-md shadow-white  flex w-full p-5 text-white text-xl  font-bold  flex-row  ' >
          <div className='bg-blue-700    border-[4px] shadow-md shadow-white  rounded-xl w-4/12 p-2 h-auto  hover:bg-blue-900 m-2' >ucl <img className='w-full mt-3 ' src={UCL} alt="ucl" /> <p className=' border-[4px] rounded-full mt-3 w-20 mx-28 font-bold text-3xl' > 14</p>  </div>    <div className='bg-blue-700 shadow-md shadow-white h-auto w-4/12 rounded-xl p-2 hover:bg-blue-900 border-[4px]  m-2'>copa del ray <img className='w-full mt-3 ' src={copa} alt="copa" /> <p className=' border-[4px] rounded-full mt-3 w-20 mx-28 font-bold text-3xl' > 20</p> </div>  <div className='bg-blue-700 border-[4px] h-auto w-4/12 rounded-xl p-2 hover:bg-blue-900 m-2 shadow-md shadow-white '>laliga <img className='w-full mt-3 ' src={laliga} alt="lliaga" /> <p className=' border-[4px] rounded-full mt-3 w-20 mx-28 font-bold text-3xl' > 34</p> </div>
        </div>
      </div>
      
      
      </div>
    </React.Fragment>
  )
}

export default App
