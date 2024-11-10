import React from 'react'

const body = () => {
  return (
    <div className='text-white space-y-4 lg:flex' >
        <div className='flex items-center justify-center lg:flex-1  lg:h-[400px]'>
        <img src='./assets/Blue-Shape.svg' alt='1' className='-rotate-[45deg] h-64 md:h-72 lg:h-[400px] '></img>
        <img src='./assets/Pink-Shape.svg' alt='2' className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"></img>
        <img src='./assets/Purple-Shape.svg' alt='3' className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]" ></img>
        <img src="./assets/Hero-Model.png" alt="image" className="absolute h-64 md:h-72 lg:h-[400px]"/>
        </div>
    <div className='lg:flex-1 '>
        <h1 className='text-5xl font-bold font-roboto leading-tight' >Host your website in less than 5 minutes </h1>
        <p className='font-poppins' >With Hoster,get your website up and running in less than 5 minutes with most competetive pricing packages available online </p><br></br>
        <form action='' className='flex flex-col gap-4 md:flex-row'>
            <input className='rounded-md px-4 py-3 placeholder:text-black' type='email' title='Enter your mail' placeholder='Enter email address'></input>
            <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-700 text-white'>Join Waitlist</button>

        </form>
        <div className='flex gap-2'>
            <img src='./assets/Checkmark.svg' alt='check'></img>
            <p className='font-poppins'>No spam,ever.Unsubscribe anytime </p>
        </div>
    </div>
    </div>
  )
}

export default body