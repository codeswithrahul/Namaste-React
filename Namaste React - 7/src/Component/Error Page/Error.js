import React from "react";
import "./Error.js";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Error</h1>
      <h2>{`${err.status} : ${err.statusText}`}</h2>
    </>
  );
};

export default Error;
