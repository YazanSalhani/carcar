import React from 'react';
import './mainPage.css';

function MainPage() {
  return (
    <>
      <div className="background"></div>
      <div className="px-4 py-5 my-5 text-center content">
        <h1 className="heading">CarCar</h1>
        <div className="col-lg-6 mx-auto">
          <p className="paragraph">
            The premiere solution for automobile dealership management!
          </p>
        </div>
      </div>
    </>
  );
}

export default MainPage;


// backgroundImage: `url('https://images.unsplash.com/photo-1620591310117-2a7946e5dc29?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
