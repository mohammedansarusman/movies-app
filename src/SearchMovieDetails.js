// searchMovie = > searchMovieDetails

import React from 'react'
import { IMG_CDN } from "./utils/constants"
import noImage from './Images/noImage.jpg'

const searchMovieDetails = (props) => {
    console.log("props", props.data)
    const { poster_path, title, overview } = props.data;
    const imageUrl = poster_path? IMG_CDN + poster_path : noImage;
    return (
        <div className=' w-[50%] h-auto flex p-1 py-2.5'>
            <div className="w-[30%] h-[130px]">
                <img
                    src={imageUrl} alt={title}
                    className="w-[100%] h-[100%] object-cover"
                />
            </div>
            <div className="w-[70%] h-[130px] bg-black py-2 flex flex-col justify-left items-left px-1">
                <div className='w-full h-[20px]'>
                    <h2 className="text-xl text-white line-clamp-1">{title}</h2>
                </div>
                <div className='w-full h-[100px] text-yellow-300 py-2'>
                    <p className='text-xs line-clamp-5'>{overview}</p>
                </div>
            </div>
        </div>
    )
}

export default searchMovieDetails