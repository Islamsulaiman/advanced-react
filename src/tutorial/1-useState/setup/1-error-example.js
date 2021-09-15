import React from 'react';

const ErrorExample = () => {
  let title = "random title";
  let handleClick = () => {
    console.log("handle click");
  }
  return (
    <React.Fragment>
      <h4>{title}</h4>
      <button type="button" className="btn" onClick={handleClick}>
        change text
      </button>
    </React.Fragment>

  );
};

export default ErrorExample;
