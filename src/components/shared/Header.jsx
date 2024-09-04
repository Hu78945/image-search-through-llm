import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 w-full border'>
      <img src='./icons/click_logo.png' className='h-8'></img>

      {/* right side */}
      <div className='flex items-center justify-center h-12 gap-1 border'>
        <div className='flex items-center px-2 rounded-md bg-[#4c3d14] h-full b border'><p className='text-13 font-normal text-yellow'>MICH.CLICKAPP.ETH</p></div>
        <div className='bg-slate-900 rounded-md h-full'>
          <img src='./icons/three_dots.png' className='h-full'></img>
        </div>
      </div>
    </div>
  )
}

export default Header