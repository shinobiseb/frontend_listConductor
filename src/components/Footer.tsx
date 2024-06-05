import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col w-full mt-10 items-center justify-around'>
        <div>        
            <p>Ney Sebastian Patin III</p>
        </div>
        <div className='flex flex-row w-full justify-center items-center'>
            <p>2022</p>
            <a className='ml-2 text-light-blue hover:text-white ease-out duration-300' target="_blank" href='https://github.com/shinobiseb/'>Github</a>
            </div>
    </footer>
  )
}
