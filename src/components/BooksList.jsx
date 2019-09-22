import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import Book from "./Book";

const BooksList = () => {
  const { books } = useContext(BooksContext);
  return (
    <>
      <div className='row'>
        {books.map(book => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </>
  );
};

export default BooksList;
