import React from 'react'
import Layout from './Layout'

const Module3 = () => {
  return (
    <div className='flex'>
      <div className='w-1/2'>
        <Layout />
      </div>

      <div className='bg-black border-2 border-red-900 w-1/2'>
        <div className='flex justify-between items-center border-b border-light-gray'>
          <div className='flex gap-2 p-4'>
            <span className='text-white'>16 IMAGES Found</span><span className='text-medium-gray'>UPDATED 6 SEC AGO</span>
          </div>
          <img src='./icons/cross_icon.png' className='h-6'></img>
        </div>

        <div>
          <div>
            <img></img>
            <div>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Module3