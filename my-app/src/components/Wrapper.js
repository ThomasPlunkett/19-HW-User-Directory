import React from 'react';
// import from corresponding style sheet

function Wrapper({ children }) {
  return (
      <div className="wrapper">
        { children }
      </div>
  );
}

export default Wrapper;
