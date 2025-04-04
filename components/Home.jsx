'use client'
import Link from 'next/link';
import React from 'react'

const Home = () => {
    const openVideoInNewTab = () => {
        const videoUrl = 'https://media1.tenor.com/m/vE8oU6hyQacAAAAC/azumanga-azumanga-daioh.gif';
        window.open(videoUrl, '_blank', 'noopener,noreferrer');
      };
  return (
    <div className='flex flex-col items-center md:p-20 p-10 min-h-screen'>
    <div className='flex justify-center items-start md:space-x-24 space-x-10'>
       <div className='flex flex-col'>
       <div className='bg-white py-1 w-full rounded-t-xl shadow flex items-center justify-between'>
        <img src='/toolbar.svg' className='w-96' />

       </div>
        <div className='bg-neutral-400 p-1'>
            <img src='/home.jpg' className='w-96' />
        </div>
       </div>
        <div className='flex flex-col md:gap-10 gap-4'>
            <div className='text-black text-center font-medium'> 
                <img src='/folder.png' className='w-24' />
                <p>stories</p>
            </div>
            <div className='text-black text-center font-medium'>
                <img src='/folder.png' className='w-24' />
                <p>profile</p>
            </div>
            <Link href='/random' className='text-black text-center font-medium'>
                <img src='/folder.png' className='w-24' />
                <p>random</p>
            </Link>
        </div>
    </div>
    <div className='font-[PPMondwest] text-black text-3xl pt-4 max-w-xl'>
        Tag-team storytelling awaits! Sign up, take turns, and see where your creativity takes you.
    </div>
    </div>
  )
}

export default Home