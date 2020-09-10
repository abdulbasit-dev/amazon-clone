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
          id='1234586227'
          title="
          EUREKA ERGONOMIC Z60 Gaming Desk 60'' Z Shaped Large PC Computer Gaming Desks Tables with RGB LED Lights Controller Stand and Mouse Pad for E-Sport Racing..."
          price={222.39}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/616jzVtP6cL._AC_SL1200_.jpg'
        />
        <Product
          id='123434422346'
          title='Office Chair, Ergonomics Mesh Chair Computer Chair Desk Chair High Back Chair w/Adjustable Headrest and Armrest,'
          price={199.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/61s9oKRxKmL._AC_SL1200_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='123566864347'
          title='Letsfit Smart Watch, Fitness Tracker with Heart Rate Monitor, Activity Tracker with 1.3 Touch Screen, IP68 Waterproof'
          price={30.39}
          rating={2}
          image='https://images-na.ssl-images-amazon.com/images/I/61QdvrEy9RL._AC_SL1500_.jpg'
        />
        <Product
          id='123233223867'
          title='
          AICHESON Laptop Cooling Pad for 17.3 Notebook, Red 5 Fans'
          price={26.8}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71Ox7ORXCsL._AC_SL1500_.jpg'
        />
        <Product
          id='12345855545'
          title='AmazonBasics Lightweight On-Ear Wired Headphones, Green'
          price={15.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71xYdqrL9LL._AC_SL1500_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='123452323862'
          title='LG 29WK600-W 29" UltraWide 21:9 WFHD (2560 x 1080) IPS Monitor with HDR10 and FreeSync, Black'
          price={226.99}
          rating={5}
          image='https://www.lg.com/us/images/monitors/md07502351/gallery/zoom-01.jpg'
        />
      </div>
    </div>
  )
}

export default Home
