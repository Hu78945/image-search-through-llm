import React from 'react'
import Header from './shared/Header'
import Prompt from './shared/Prompt'

const Layout = () => {
  return (
    <div className='bg-black h-screen flex flex-col items-center'>
      <Header />
      <Prompt />
    </div>
  )
}

export default Layout