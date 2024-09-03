import React from 'react'
import Header from './shared/Header'
import Prompt from './shared/Prompt'

const Layout = ({data, inProgress}) => {
  return (
    <div className='bg-black h-screen flex flex-col items-center'>
      <Header />
      <Prompt data={data} inProgress={inProgress} />
    </div>
  )
}

export default Layout