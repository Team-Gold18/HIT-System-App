import React from 'react';
import backgroundImage from '../components/images/bg.jpg'
import "../styles/Home.css";

function Home() {
  return (
      <div className="container">
      <img  className="bgImage"src={backgroundImage} alt="" />
    </div>
  )
}

export default Home;