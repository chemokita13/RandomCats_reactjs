import React from 'react'

export default function ImageCard({imageData}) {
  return (
    <div className='Image-container'>
        <img src={imageData.url} alt='' />
        <span className='Image-footer'>Photo id: {imageData.id}</span>
    </div>
  )
}
