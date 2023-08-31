import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <h1>OOps! </h1>
    </div>
  );
};

export default Error;
