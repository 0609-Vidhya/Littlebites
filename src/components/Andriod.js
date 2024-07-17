import React from 'react'
import AndriodFeatures from './AndriodFeatures'

const cardData=[{
  img:'../images/login-image.png',
  title:'User Login and Registration',
  desc:'There are a variety of delivery platforms available today, so how do you choose the right one, and why be present on several? The location'
},
{
  img:'../images/notification.png',
  title:'Push Notification Setup',
  desc:'There are a variety of delivery platforms available today, so how do you choose the right one, and why be present on several? The location'
},
{
  img:'../images/cashback].png',
  title:'Festive & Cashback Offers',
  desc:'There are a variety of delivery platforms available today, so how do you choose the right one, and why be present on several? The location'
},
{
  img:'../images/multipleres.png',
  title:'Real-time Live Tracking',
  desc:'There are a variety of delivery platforms available today, so how do you choose the right one, and why be present on several? The location'
},
]
export default function Andriod() {
  return (
    <div className='mobile-food'>
      <div className='col-1'>
      {cardData.map((card) => (
        <AndriodFeatures 
          key={card.title}
          image={card.img}
          title={card.title}
          description={card.desc}
        />
      ))}
      </div>
      
      
      <div className='android-img'>
        <img src='../images/andriodmobile.png' width={350}/>
      </div>
      <div>
      {cardData.map((card) => (
        <AndriodFeatures 
          key={card.title}
          image={card.img}
          title={card.title}
          description={card.desc}
        />
      ))}
      
      </div>
    </div>
  )
}
