import React from 'react'
import Input from './Input'
import Stories from './Stories'

function Feed() {
    return (
        <div className=' flex-grow  h-screen mr-4  pt-6 xl:mr-40 '>
            <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
            <Stories/>
            <Input/>
            </div>
            
        </div>
    )
}

export default Feed
