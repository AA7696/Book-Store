import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleBook = () => {
  const {id} = useParams()
  const [data, setData] = useState({})

  const fetch = async ()=>{
    try {
      const response = await axios.get(`http://localhost:3000/api/books/${id}`)
      const data = await response.data;
      const book = data.book;
      setData(book)





    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    fetch();
  },[])


  return (
    <>
      <div className="single w-screen min-h-screen flex justify-center items-center p-6">
        <div className="wraper w-[80%] h-[80%] flex">
          <div className="imgwrapper w-[50%] flex items-centre justify-center">
            <img width={400} src={data.imgUrl} alt="" />
          </div>
          <div className="content-wrapper  w-[50%] flex justify-center  flex-col gap-10 text-black">
            <h1>{data.name}</h1>
            <h2 className=' text-2xl'>Author: {data.author}</h2>
            <p className=' text-xl text-gray-500'>{data.description}</p>
            <div className="badge badge-primary w-48 h-14 text-xl ">${data.price}</div>


          </div>
            
        </div>

      </div>
    </>
  )
}

export default SingleBook
