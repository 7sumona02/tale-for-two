import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-neutral-100'>
        <video src='/azumanga-azumanga-daioh.mp4' className='h-[90vh]' autoPlay loop muted />
    </div>
  )
}

export default page