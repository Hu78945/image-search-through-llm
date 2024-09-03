import React from 'react'

const Answer = ({data}) => {
  return (
    <div className='bg-gray-800 ml-auto px-4 py-2 rounded-sm'>
      <p className='text-white'>{data.description}</p>
    </div>
  )
}

export default Answer