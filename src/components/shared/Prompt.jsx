import React from 'react'

const Prompt = () => {
  return (
    <div className='p-2 flex flex-col justify-between w-1/2 h-full'>
      <div className='flex flex-col gap-6'>
        <p className='text-white font-aeonik'>How can click help you today?</p>
        <div className='bg-gray-800 ml-auto px-4 py-2 rounded-sm'>
          <p className='text-white'>Find me some pictures of people on the street</p>
        </div>
        <p className='text-15 text-medium-gray'>Looking for photos...</p>
      </div>

      <div className='w-full relative'>
        <input className='w-full rounded-sm p-3 placeholder-light-gray' placeholder='Message Click'></input>
        <div className='bg-yellow h-8 w-8 absolute right-2 top-2 rounded-sm p-2'>
          <img src='./icons/arrow_upwards.png'></img>
        </div>
      </div>
    </div>
  )
}

export default Prompt