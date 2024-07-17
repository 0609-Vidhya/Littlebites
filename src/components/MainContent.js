import React from 'react'
import CompanyStatus from './CompanyStatus'



export default function MainContent() {
  return (
    <div style={{position:'relative'}}>

    <div className='main-food-content'>
      <div className="food-content">
        <h1>Create Your Own</h1>
        <h2 style={{ fontWeight: 800 }}>Mobile Food Ordering App </h2>
        <p>
          App-based food delivery is a popular way to get a quick and easy meal.
          While food delivery was limited to certain types of restaurants for
          years, services like Uber Eats and Grubhub have made it easy to get
          food delivered to your door. Contact-less delivery options can also
          help cut down the need to stand at the door and wait
        </p>
        <button type="button" class="btn btn-warning text-white">Talk to Our Expert Now !</button>

      </div>
      <div className="food-img">
        <img src='../images/food-img.png' width={500}/>

      </div>
     
    </div>
    <div className='companies-list'>
    <CompanyStatus/>
    </div>
    </div>
  )
}
