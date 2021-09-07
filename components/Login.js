import React from 'react'
import Image from "next/image";
import logo from "./logo.png";
import {signIn} from 'next-auth/client'

function Login() {
    return (
        <div className='grid place-items-center h-screen'>
            <Image src={logo} height={400} width={400} objectFit='contain' />
            <h1 onClick={signIn} className='p-5 bg-blue-500 rounded-full cursor-pointer text-white'>Login with facebook</h1>
        </div>
    )
}

export default Login
