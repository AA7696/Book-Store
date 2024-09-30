    <div className="bookList w-screen min-h-screen  p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
      {list.map((book) =>{
        return(
          <Book key={book._id} book={book} id={book._id} deleteBook={deleteBook} />
        )
      })}
    </div>
