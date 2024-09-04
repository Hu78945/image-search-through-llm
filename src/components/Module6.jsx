import React from 'react'
import Layout from './Layout'
import Header from './shared/Header'

const Module6 = () => {
  return (
    <div className='flex bg-black h-screen'>
      <div className='w-3/4 border'>
        <Header />
        <div className='flex justify-center items-center border border-red-900 h-full'>
          <div className='border w-1/2 relative'>
          <img src='./icons/click_logo_textless.png' className='absolute top-2 right-2 w-5 h-5'></img>
            <img src='./icons/module_3a.png' className='w-full h-60' alt='Module'></img>
            <div className='flex justify-between p-2'>
              <div>
                <p className='text-10 text-white uppercase'>Monday・September 26, 2023・14:45</p>
                <p className='text-10 text-medium-gray uppercase'>Via Farini, Bologna, Italy</p>
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
        <div className='p-2 h-40 bg-custom-gradient flex flex-col justify-between'>
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
          <div className='border-b border-dark-gray py-10'>
            <p className='text-10 text-medium-gray mb-2'>LOCATION</p>
            <p className='text-13 text-white'>48.866659 N, 2.36344 W</p>
            <p className='text-13 text-medium-gray uppercase mb-2'>Toronto, Canada</p>
            <div className='bg-medium-gray w-full h-40 flex justify-center items-center'>
              <img src='./icons/map_locator.png' className='h-8 w-8'></img>
            </div>
          </div>

          <div className='border-b border-dark-gray py-6'>
            <p className='text-10 text-medium-gray mb-2'>DEVICE AND CAMERA</p>

            <p className='text-13 text-white uppercase'>iPhone 14 Pro</p>
            <p className='text-13 text-medium-gray uppercase mb-4'>iPhone 14 Pro back camera 6.86 mm f/1.78</p>

            <p className='text-10 text-medium-gray mb-2'>CAMERA SETTINGS</p>
              <p className='text-13 text-white mb-4'>30 FPS</p>

              
            <p className='text-10 text-medium-gray mb-2'>VIDEO SETTINGS</p>
            <p className='text-13 text-white'>0:07 S・MOV・3024x4032・21.7 MB</p>
          </div>
          <div className='flex justify-between gap-2 pt-8'>
            <div className='w-4 h-4 bg-white rounded-full flex justify-center items-center'>
              <img src='./icons/click_logo_textless.png' className=' top-2 right-2 w-3 h-3'></img>
              
            </div>
            <p className='text-10 text-yellow'>POWERED BY NODLE CONTENTSIGN SDK</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Module6
