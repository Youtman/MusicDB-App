import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='heroSection'>
    <div className="heroText">
    <h1>Welcome to our Music App</h1>
    <p>Listen to the latest, hottest and freshest music <br/>from your favourite artists right here on our app.</p>
    <button className="start">
      <Link to="/music">Get Started</Link>
    </button>
   </div>
   </section>
  )
}

export default Home