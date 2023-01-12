import React, { useState } from "react";
import "./Body.css";
import { restaurantList, IMG_URL } from "../../config";
import { BsSearch } from "react-icons/Bs";

const RestCard = ( {restaurant} ) =>{
  return(
    <>
      <div className="card">
        <img src={IMG_URL + restaurant.data.cloudinaryImageId} alt="" />
        <h2>{restaurant.data.name}</h2>
        <h3>{restaurant.data.cuisines}</h3>
        <h4>{restaurant.data.totalRatingsString}</h4>
      </div>
    </>
  )
}

const Body = () => {
  return(
    <>
    <div className="main">
     <RestCard restaurant ={restaurantList[0]} />
     <RestCard restaurant ={restaurantList[1]} />
     <RestCard restaurant ={restaurantList[2]} />
    </div>
    </>
  )
}

export default Body;