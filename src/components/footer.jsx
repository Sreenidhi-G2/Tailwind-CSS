import React from 'react'

const footer = () => {
  return (
    <div className='text-white flex flex-col gap-12 md:flex-row justify-between' >
        <ul className='flex gap-6 font-roboto'>
            <li>
                <a href='#'>Facebook</a>
            </li>
            <li>
                <a href='#'>Instagram</a>
            </li>
            <li>
                <a href='#'>Twitter</a>
            </li>
        </ul>
        <div className='flex gap-2'>
            <img src='./assets/Help-Avatar.svg' alt='help'></img>
        <div>
            <p className='font-poppins font-thin'>Have a Question?</p>
            <a href='#' className='font-poppins font-medium'>Talk to specialist</a>
        </div>
        </div>
    </div>
  )
}

export default footer