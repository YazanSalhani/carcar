import React from 'react';

function MainPage() {
  const backgroundStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1620591310117-2a7946e5dc29?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    color: '#1a472a',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    fontSize: '1.2rem',
  };

  const headingStyle = {
    fontSize: '6rem',
  };

  const paragraphStyle = {
    fontSize: '1.8rem',
  };

  return (
    <>
      <div style={backgroundStyle}></div>
      <div className="px-4 py-5 my-5 text-center" style={contentStyle}>
        <h1 className="display-5 fw-bold" style={headingStyle}>CarCar</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4" style={paragraphStyle}>
            The premiere solution for automobile dealership
            management!
          </p>
        </div>
      </div>
    </>
  );
}

export default MainPage;

// backgroundImage: `url('https://images.unsplash.com/photo-1620591310117-2a7946e5dc29?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
