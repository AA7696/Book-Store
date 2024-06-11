import React from 'react'
import { Link } from 'react-router-dom'
import book from '../assets/book.jpg'

const Home = () => {
  return (
    <>
    <div className="hero min-h-screen" style={{backgroundImage: "url(" + book +")"}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-black">Welcome to Book Store</h1>
      <p className="mb-5 text-black text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to='/books'><button className="btn btn-primary text-white">GO TO Store</button></Link>
    </div>
  </div>
</div>
    </>
  )
}

export default Home