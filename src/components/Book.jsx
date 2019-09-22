import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

const Book = props => {
  const { removeBook, toggleRead } = useContext(BooksContext);
  const { book } = props;
  return (
    <>
      <div className='card m-3' style={{ maxWidth: 350 + "px" }}>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img src='...' className='card-img' alt='...' />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title text-info '>{book.title}</h5>
              <p>
                <strong className='card-text'>Author:</strong> {book.author}
              </p>
              <p>
                <strong className='card-text'>Year :</strong>
                {book.year}
              </p>
              <p className='card-text'>
                <small className='text-muted'>
                  {book.read ? "completed" : "Not Read yet"}
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className='card-footer'>
          <button
            className='btn float-right btn-info'
            onClick={() => toggleRead(book.id)}>
            Toggle read{" "}
          </button>
          <button
            className='btn float-left btn-outline-danger'
            onClick={() => removeBook(book.id)}>
            Remove book
          </button>
        </div>
      </div>
    </>
  );
};

export default Book;
