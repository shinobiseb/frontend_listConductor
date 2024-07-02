import React from 'react'

export default function Featured() {
  return (
    <div className='h-1/3 w-full p-2 justify-center rounded-md overflow-hidden hidden sm:flex sm:flex-col bg-hero'>
        <div className='h-1/2 flex flex-col justify-evenly p-4'>
            <h3 className='text-4xl text-white font-bold'>NEW SONG ALERT</h3>
            <p className='text-white italic'>Sketch the Conductor blesses our feed once again!</p>
        </div>
    </div>
  )
}
