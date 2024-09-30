import React, { useEffect, useState } from 'react'
import Book from '../../component/Book'
import axios from 'axios'

const List = () => {
  const [list, setList] = useState([])

  const fetchList = async () =>{
    try {
      const result = await axios.get('http://localhost:3000/api/books');
      const bookList = result.data.books
      setList(bookList)   
    } catch (error) {
      console.log(error);
    }
  
  }

  useEffect(() =>{
   fetchList()

  })

  const deleteBook = async (id) =>{
  const user = confirm("Do you want to delete this item")

  if(user){
    try {
      await axios.delete(`http://localhost:3000/api/books/${id}`)
    } catch (error) {
      console.log(error);
    }

  }
  }
  return (
    <>
      <div className="bookList w-screen min-h-screen  p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
      {list.map((book) =>{
        return(
          <Book key={book._id} book={book} id={book._id} deleteBook={deleteBook} />
        )
      })}
    </div>

    </>
  )
}


export default List

