import React from 'react'

const VideoTitle = ({ overview, title }) => {
  return (
    <div className='w-[30%] bg-blue-300 flex-col px-[20px] py-[20px] '>
      <h1 className = "text-2xl">{title}</h1>
      <p className='text-xs py-[20px]'>{overview}</p>
      <div>
        <button className='bg-white text-black p-[10px] rounded-lg'>Play</button>
        <button className='bg-white text-black ml-[10px] p-[10px] rounded-lg'>More Info</button>

      </div>

    </div>
  )
}

export default VideoTitle