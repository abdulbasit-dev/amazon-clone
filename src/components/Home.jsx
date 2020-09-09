import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
      />
      <div className='home__row'>
        <Product
          id='12345867'
          title="
          EUREKA ERGONOMIC Z60 Gaming Desk 60'' Z Shaped Large PC Computer Gaming Desks Tables with RGB LED Lights Controller Stand and Mouse Pad for E-Sport Racing..."
          price={222.39}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/616jzVtP6cL._AC_SL1200_.jpg'
        />
        <Product
          id='123422346'
          title='Wireless Earbuds, TaoTronics True Wireless Earbuds SoundLiberty 88, Smart Noise Reduction for Clear Calls, Intuitive Ear Detection,'
          price={47.99}
          rating={3}
          image='https://images-na.ssl-images-amazon.com/images/I/51J3Ap2negL._AC_SL1300_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='123566867'
          title='Letsfit Smart Watch, Fitness Tracker with Heart Rate Monitor, Activity Tracker with 1.3 Touch Screen, IP68 Waterproof'
          price={30.39}
          rating={2}
          image='https://images-na.ssl-images-amazon.com/images/I/61QdvrEy9RL._AC_SL1500_.jpg'
        />
        <Product
          id='12323867'
          title='
          AICHESON Laptop Cooling Pad for 17.3 Notebook, Red 5 Fans'
          price={26.8}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71Ox7ORXCsL._AC_SL1500_.jpg'
        />
        <Product
          id='12345855'
          title='AmazonBasics Lightweight On-Ear Wired Headphones, Green'
          price={15.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71xYdqrL9LL._AC_SL1500_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='12345862'
          title='AKASO Brave 4 4K 20MP WiFi Action Camera Ultra HD with EIS 30m Underwater Waterproof Camera Remote Control 5X Zoom Underwater Camcorder with 2 Batteries and Helmet Accessories Kit'
          price={67.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61t5FWADtRL._AC_SL1001_.jpg'
        />
      </div>
    </div>
  )
}

export default Home
