import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header className=' w-full bg-blue-500 p-6'>
        <nav className=' flex flex-col gap-3 md:flex-row w-full md:items-center'>
            <Link to='/' className='text-4xl text-white font-extrabold md:flex-1'>Book Store</Link>
            <div className="navitems">
                <ul className=' flex flex-col gap-3 md:flex-row  md:gap-8'>
                    <li className=' text-lg'><Link to= '/about' className=' text-white font-medium'>About us</Link></li>
                    <li className=' text-lg'><Link to='/books' className=' text-white font-medium'>Book List</Link></li>
                    <li className=' text-lg'><Link to='/create' className=' text-white font-medium'>Create</Link></li>
                </ul>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar