import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <>
      <div className="search-shimmer"></div>
      <div className="shimmer-container">
        {Array(15)
          .fill("")
          .map((e) => (
            <div className="shimmer">
              <div></div>
              <div></div>
              <div></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
