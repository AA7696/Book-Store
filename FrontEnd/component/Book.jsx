import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';


const Book = ({book, id, deleteBook}) => {


  return (
    <>
   <div className="card bg-base-100 shadow-xl max-h-96 max-w-72">
  <figure><img className=' rounded-md' width={200}  src= {book.imgUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h1 className="card-title font-semibold text-xl">
      {book.name}
    </h1>
    <h4>Author: {book.author}</h4>
    <div className="custombadge flex gap-4">
    <div className="badge badge-primary">${book.price}</div>
      <div className="badge badge-outline">{book.availability ? 'Available' : 'Not Available'}</div>
    </div>
    <div className="card-actions justify-end mt-3">
      <button className="badge badge-outline" onClick={() => deleteBook(id)}>Delete</button> 
    <button className="badge badge-outline"><Link to={`/editbook/${id}`}>Edit</Link></button>
    <button className="badge badge-outline"><Link to={`/books/${id}`}>Show</Link></button>
    </div>
  </div>
</div>
    </>
  )
}

export default Book