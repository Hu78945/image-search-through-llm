import React from 'react'
import Layout from './Layout'

const Module2 = () => {
  const data = [
    {description: "How can Click help you today?", imageData: []},
    {description: "Find me some pictures of people on the street", imageData: []},
  ]
  return (
    <div>
      <Layout data={data} inProgress={true} displaySidePanel={false} />
    </div>
  )
}

export default Module2