import React from "react";

const Landing = () => {
  return (
    <>
      <div className=' jumbotron bg-dark'>
        <h1 className='display-4 text-info'>The Books List app </h1>
        <p className='lead text-info'>Welcome to this simple app </p>
        <p className='text-warning'>
          Leaern how to use context-api and hooks.{" "}
        </p>
        <a
          to='/booklist'
          className='btn btn-primary btn-lg'
          href='/'
          role='button'>
          Learn more
        </a>
      </div>
    </>
  );
};

export default Landing;
