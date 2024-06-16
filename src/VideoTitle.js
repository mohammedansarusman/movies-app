import React from 'react'

const VideoTitle = ({ overview, title }) => {
  return (
    <div className='w-[30%] h-[100%] aspect-video  flex-col px-[20px] py-[20%] absolute bg-gradient-to-r from-black'>
      <h1 className = "text-2xl text-white">{title}</h1>
      <p className='text-xs py-[20px] text-yellow-300'>{overview}</p>
      <div>
        <button className='bg-white text-black p-[10px] rounded-lg'>Play</button>
        <button className='bg-white text-black ml-[10px] p-[10px] rounded-lg'>More Info</button>

      </div>

    </div>
  )
}

export default VideoTitle