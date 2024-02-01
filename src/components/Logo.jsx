import React from 'react'
import { Image } from 'react-bootstrap'
import logo from '../MyPic.png'
const Logo = () => {
  return (
    <div style={{ marginBottom: '15px' }}>

      <Image src={logo} alt="MyPic" style={{ width: '100%', maxWidth: '240px', height: '240px', left: '50%', transform: 'translateX(-50%)', top: '136px', position: 'absolute' }} />
    </div>

  )
}

export default Logo