import React from 'react'

export default function BussinessModal({data}) {
  const { img1,img2, heading, heading1, para } = data;

  return (
    <div className='business-modal-row'>
        <img src={img1} width={250}/>
        <div style={{textAlign:'center'}}>
            <h3>{heading}</h3>
            <h3>{heading1}</h3>
            <p>{para} </p>
        </div>
        <img src={img2} width={250}/>
      
    </div>
  )
}
