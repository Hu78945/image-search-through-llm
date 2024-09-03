import React from 'react'
import Answer from './Answer'
import Question from './Question'

const Prompt = ({data, inProgress = false, imageData}) => {
  
  return (
    <div className='p-2 flex flex-col justify-between w-1/2 h-full'>
      <div className='flex flex-col gap-6'>
        {data.map((item, index) => {
          if (index % 2 === 0) {
            return <Question key={index} data={item} />;
          } else {
            return <Answer key={index} data={item} />;
          }
        })}
        {inProgress && <p className='text-15 text-medium-gray'>Looking for photos...</p>}
        <div className='flex'>
          {imageData.map((item)=>
            <img src={item.imagePath} className='h-24 w-1/6'></img>
          )}
          <div className='flex justify-center items-center bg-dark-gray w-1/6 text-white'>+24</div>
        </div>
        
        
        
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