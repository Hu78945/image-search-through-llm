import React from 'react'

const Question = ({data}) => {
  return (
    <div>
      <p className='text-white'>{data.description}</p>

      <div className='flex w-3/4'>
        {data.imageData[0] && data.imageData[0].map((imgItem, imgIndex) => (
          <img key={imgIndex} src={imgItem.imagePath} className='h-24 w-1/6' alt="" />
        ))}
        {data.imageData[1] && (
          <div className='flex justify-center items-center bg-dark-gray w-1/6 text-white'>
            {data.imageData[1]}
          </div>
        )}
      </div>
    </div>

  )
}

export default Question