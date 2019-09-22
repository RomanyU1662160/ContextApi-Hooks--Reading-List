import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AddBookForm from "./components/AddBookForm";
import BooksContextProvider from "./contexts/BooksContext";
import BooksList from "./components/BooksList";

function App() {
  return (
    <Fragment>
      <BooksContextProvider>
        <Navbar></Navbar>
        <Landing></Landing>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-5'>
              {" "}
              <h3 className='text-info '>Add New Book </h3>
              <AddBookForm></AddBookForm>
            </div>
            <div className='col-md-7'>
              <h3 className='text-info text-center'> Books list </h3>
              <BooksList></BooksList>
            </div>
          </div>
        </div>
      </BooksContextProvider>
    </Fragment>
  );
}

export default App;
