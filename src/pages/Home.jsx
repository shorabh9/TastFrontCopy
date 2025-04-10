import React from 'react'
import FoodList from './FoodList'
function Home() {
  return (
    <>
      
      <div className=" pb-[30px] text-white  bg-[url('/src/bg.png')] min-h-screen   bg-cover bg-center  w-full  ">
        
      <div className="  pt-[40px] pr-[30px] "> 
      <div className='flex justify-center' >
        <form className=" flex bg"><input   placeholder=' Boiled Eggs....' className=' text-black p-[10px] w-[350px] outline-none bg-white h-[40px] rounded-l-md' />
        <button type='submit' className=' h-[40px] bg-red-500 text-[15px] p-[8px] w-[60px]  rounded-r-md '>Search</button>
        </form>
        </div>
        <ul className=' font-bold  justify-end text-[20px] flex gap-[30px]' >
          <li>Breakfast</li>
          <li >Lunch</li>
          <li>Dinner</li>
        </ul>
      </div>
        <div className=' mt-[30px] '>
            <FoodList/>
        </div>
      </div>
    </>
   
  )
}
export default Home