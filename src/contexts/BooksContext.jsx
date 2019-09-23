import React, { createContext, useState } from "react";

export const BooksContext = createContext();

const BooksContextProvider = props => {
  const [books, setBooks] = useState([]);

  const addBook = book => {
    setBooks([...books, book]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  const toggleRead = id => {
    const newBooks = books.map(book => {
      if (book.id == id) {
        book.read = !book.read;
        return setBooks([...books]);
      }
      return setBooks([...books]);
    });
  };

  return (
    <BooksContext.Provider value={{ books, addBook, removeBook, toggleRead }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
