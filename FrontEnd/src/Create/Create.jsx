import React, { useState } from 'react'
import axios from 'axios'

function Create() {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    author: '',
    imgUrl: '',
    description: ''

  })

  const handelSubmit = async (e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/books',{
        name: formData.name,
        price: formData.price,
        author: formData.author,
        imgUrl: formData.imgUrl,
        description: formData.description
    
      })

    } catch (error) {
      console.log(error);
      
    }
    console.log(formData);
    setFormData({
      name: '',
      price: 0,
      author: '',
      imgUrl: '',
      description: ''
    })


  }
  return (
    <>
      <div className="create w-screen h-screen grid place-content-center">
        <div className="createContainer max-w-md min-h-28 overflow-hidden flex flex-col gap-7 p-8 border-2 rounded-md shadow-lg ">
          <h1 className=' text-blue-600 font-semibold'>Add Your Book</h1>
          <form action="" className=' flex flex-col gap-1' onSubmit={handelSubmit}>
            <label className=' text-black' htmlFor="name">NAME</label>
            <input className=' h-8 rounded-md' type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            <br/>
            <label className=' text-black' htmlFor="name">Price</label>
            <input  className=' h-8 rounded-md' type="number" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} />
            <br/>
            <label  className=' text-black' htmlFor="name">Author</label>
            <input  className=' h-8 rounded-md' type="text"  value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} />
            <br/>
            <label className=' text-black' htmlFor="name">Image URL</label>
            <input  className=' h-8 rounded-md' type="text"  value={formData.imgUrl} onChange={e => setFormData({...formData, imgUrl: e.target.value})} />
            <br/>
            <label className=' text-black' htmlFor="name">Description</label>
            <textarea type="text"  value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
            <br/>
            <button>Add</button>

          </form>
          
        </div>
      </div>
    </>
  )
}

export default Create