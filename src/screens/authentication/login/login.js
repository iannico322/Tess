import React from 'react'
import MagkahiosaLogo from './../../../images/MagkahiOSA-Logo-1.png'
import Input from '../../../components/input/input'

const LoginPage = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-white'>
        <div className='flex w-[30%] flex-col items-center justify-center gap-5'>
            
            <Input 
              label="Email"
              placeholder="Email"
            />
            
        </div>
    </div>
  )
}

export default LoginPage