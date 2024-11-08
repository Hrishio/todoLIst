import React from 'react'
import NavBar from './molecules/navs/NavBar'

const Template = ({comp:Component}) => {
  return (
    <div>
      <NavBar/>
      <div className='custom-container'><Component/></div>
      
    </div>
  )
}

export default Template
