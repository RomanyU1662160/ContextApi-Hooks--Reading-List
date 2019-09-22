import React, { useContext, useState } from "react";
import { BooksContext } from "../contexts/BooksContext";
import uuid from "uuid";

const AddBookForm = () => {
  const { addBook } = useContext(BooksContext);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    read: "",
    date: "",
    id: ""
  });
  const { title, author, date } = formData;
  const handleOnChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = uuid.v4();
    const newbook = { id, title, author, date, read: false };
    addBook(newbook);
    setFormData({ title: "", author: "", date: "" });
  };
  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            name='title'
            value={title}
            onChange={e => handleOnChange(e)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='author'>Author</label>
          <input
            type='text'
            className='form-control'
            name='author'
            value={author}
            onChange={e => handleOnChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            className='form-control'
            name='date'
            value={date}
            onChange={e => handleOnChange(e)}
          />
        </div>
        <button type='submit' className='btn btn-info float-right'>
          Add New Book
        </button>
      </form>
    </>
  );
};

export default AddBookForm;
