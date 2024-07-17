import React from 'react'

export default function FoodCard({ data }) {
    const { img, title, desc } = data;
  return (
    <div className='FoodCard'>
      <div class="card" style={{width:'18rem',textAlign:'center'}}>
        <img src={img} class="card-img-top" alt="..."  style={{width:'100px',marginLeft:'100px',height:'90px'}}/>
        <div class="card-body">
            <h4 style={{fontWeight:350,textAlign:'center'}}>{title}</h4>
          <p class="card-text">
           {desc}
          </p>
        </div>
      </div>
    </div>
  )
}
