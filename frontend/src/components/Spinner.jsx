import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <BallTriangle
        type="Circles"
        color="#00bfff"
        height={150}
        width={200}
        className="m-7 "
      />
      <p className="text-lg text-center px-2 ">{message}</p>
    </div>
  );
};

export default Spinner;
