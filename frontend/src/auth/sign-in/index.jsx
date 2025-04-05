import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function SigninPage() {
  return (
    <div className='flex items-center justify-center my-20 items-center'>
        <SignIn/>
    </div>
  )
}

export default SigninPage