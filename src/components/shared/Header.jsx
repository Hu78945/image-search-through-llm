import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-4 w-full'>
      <img src='./icons/click_logo.png' className='h-8'></img>

      {/* right side */}
      <div className='flex items-center justify-center gap-1'>
        <div className='p-2 rounded-md bg-[#4c3d14]'><p className='text-13 font-normal text-yellow'>MICH.CLICKAPP.ETH</p></div>
        <div className='bg-slate-900 rounded-md'>
          <img src='./icons/three_dots.png' className='h-full'></img>
        </div>
      </div>
    </div>
  )
}

export default Header