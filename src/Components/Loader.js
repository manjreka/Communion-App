import React from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-grow spinner-grow-sm text-white mx-1"
        role="status"
      ></div>
      <div
        className="spinner-grow spinner-grow-sm text-white mx-1"
        role="status"
      ></div>
      <div
        className="spinner-grow spinner-grow-sm text-white mx-1"
        role="status"
      ></div>
    </div>
  );
};

export default Loader;
