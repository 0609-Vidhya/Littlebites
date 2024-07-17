import './App.css'
import Andriod from './components/Andriod'
import AndriodFeatures from './components/AndriodFeatures'
import BussinessModal from './components/BussinessModal'
import FoodCard from './components/FoodCard'
import FoodDeliveryCustomer from './components/FoodDeliveryCustomer'
import FoodDeliveryRow from './components/FoodDeliveryRow'
import Header from './components/Header'
import MainContent from './components/MainContent'
const data = [
  {
    img: '../images/res.jpeg',
    title: 'Single Restaurants',
    desc:
      'Some quick example text to build on the card title and make up the bulk of the card content.Some quick example text to build on the card title and make up the bulk of the card content.',
  },
  {
    img: '../images/location.jpeg',
    title: 'Food Market Place',
    desc:
      'Some quick example text to build on the card title and make up the bulk of the card content.Some quick example text to build on the card title and make up the bulk of the card content.',
  },
  {
    img: '../images/multipleres.png',
    title: 'Restaurant Chains',
    desc:
      'Some quick example text to build on the card title and make up the bulk of the card content.Some quick example text to build on the card title and make up the bulk of the card content.',
  },
]

const businessCardData = [
  {
    img1: '../images/food-plate.jpeg',
    img2: '../images/food-plate-1.jpeg',
    heading: 'Bussiness Modal We Support',
    para:
      'App-based food delivery is a popular way to get a quick and easy meal. While food delivery was limited to certain types of restaurants for years, services like Uber Eats and Grubhub have made it easy to get food delivered to your door',
  },
]
const overviewCardData = [
  {
    img1: '../images/meat.jpeg',
    img2: '../images/orange-juice.png',
    heading: 'Overview of Little Bites',
    para:
      'App-based food delivery is a popular way to get a quick and easy meal. While food delivery was limited to certain types of restaurants for years, services like Uber Eats and Grubhub have made it easy to get food delivered to your door',
  },
]

const featureCardData = [
  {
    img1: '../images/orange-juice.png',
    img2: '../images/orange-juice.png',
    heading: 'Features of Little Bites',
    heading1: ' Food Delivery Solution',
    para:
      'App-based food delivery is a popular way to get a quick App-based food delivery is a popular way to get a and easy meal. While food delivery was limited to certain types of restaurants for years, services like Uber Eats and Grubhub have made it easy to get food delivered to your door',
  },
]

function App() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      {businessCardData.map((item, index) => (
        <BussinessModal key={index} data={item} />
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {data.map((item, index) => (
          <FoodCard key={index} data={item} />
        ))}
      </div>
      <div>
        {overviewCardData.map((item, index) => (
          <BussinessModal key={index} data={item} />
        ))}
      </div>
      <FoodDeliveryCustomer />
      <div style={{ background: '#87C200' }}>
        {featureCardData.map((item, index) => (
          <FoodDeliveryRow key={index} data={item} />
        ))}
      </div>
      <Andriod />
    </div>
  )
}

export default App
