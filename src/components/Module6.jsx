import React from 'react'
import Layout from './Layout'
import Header from './shared/Header'

const Module6 = () => {
  return (
    <div className='flex bg-black h-screen'>
      <div className='w-3/4 border'>
        <Header />
        <div className='flex justify-center items-center border border-red-900 h-full'>
          <div className='border w-1/2'>
            <img src='./icons/module_3a.png' className='w-full h-60' alt='Module'></img>
            <div className='flex justify-between p-2'>
              <div>
                <p className='text-10 text-white'>Monday・September 26, 2023・14:45</p>
                <p className='text-10 text-medium-gray'>Via Farini, Bologna, Italy</p>
              </div>
              <div className='h-fit p-1 rounded-md bg-[#4c3d14] border'>
                <p className='text-10 font-normal text-yellow'>CLOSE INFO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-1/4 border'>
        {/* signature box  */}
        <div className='p-2 h-40 border bg-custom-gradient flex flex-col justify-between'>
          <div className='flex justify-between items-center'>
            <p className='text-13 text-white'>SIGNED BY CLICK APP</p>
            <img src='./icons/cross_icon.png' className='h-6 w-6' alt='Close'></img>
          </div>
          <div className='flex justify-between'>
            <div>
              <img src='./icons/signature.png'></img>
              <p className='text-10 text-white'>Monday・September 26, 2023・14:45:12 (cet)</p>
            </div>
            <div className='bg-custom-gradient-2 h-12 w-20 rounded-2xl'>
              <img src='./icons/click_logo.png'></img>
            </div>
          </div>
        </div>

        <div className='px-4'>
          <div className='border-b py-10'>
            <p className='text-10 text-medium-gray'>LOCATION</p>
            <p className='text-13 text-white'>48.866659 N, 2.36344 W</p>
            <p className='text-13 text-medium-gray'>Toronto, Canada</p>
            <div className='bg-medium-gray w-full h-40 flex justify-center items-center'>
              <img src='./icons/map_locator.png' className='h-8 w-8'></img>
            </div>
          </div>

          <div className='border-b py-10'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Module6
