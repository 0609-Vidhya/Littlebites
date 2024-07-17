import React from 'react'

export default function AndriodFeatures({ image, title, description }) {
    
  return (
    <div className='andriod-card'>
      <div style={{padding:'20px'}}>
        <p style={{fontSize:'18px'}}>{title}</p>
        <p style={{fontSize:'14px'}}>
         {description}
        </p>
      </div>
      <div className="bg-img-style">
        <img src={image} width={100} />
      </div>
    </div>
  )
}
