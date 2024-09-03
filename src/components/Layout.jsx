import React from 'react'
import Header from './shared/Header'
import Prompt from './shared/Prompt'

const Layout = () => {
  return (
    <div className='bg-black h-screen border-2 border-green-700 flex flex-col items-center'>
      <Header />
      <Prompt />
    </div>
  )
}

export default Layout