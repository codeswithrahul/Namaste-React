import React, { useState } from "react";
import "./Body.css";
import { restaurantList, IMG_URL } from "../../config";
import { BsSearch } from "react-icons/Bs";

// const RestCard = ( {restaurant} ) =>{
//   const{name,cuisines,totalRatingsString,cloudinaryImageId} = restaurant.data;
//   return(
//     <>
//       <div className="card">
//         <img src={IMG_URL + cloudinaryImageId} alt="" />
//         <h2>{name}</h2>
//         <h3>{cuisines}</h3>
//         <h4>{totalRatingsString}</h4>
//       </div>
//     </>
//   )
// }
const RestCard = ( {name,cuisines,totalRatingsString,cloudinaryImageId} ) =>{
  return(
    <>
      <div className="card">
        <img src={IMG_URL + cloudinaryImageId} alt="" />
        <h2>{name}</h2>
        <h3>{cuisines}</h3>
        <h4>{totalRatingsString}</h4>
      </div>
    </>
  )
}

const Body = () => {
  return(
    <>
    <div className="main">
     <RestCard name ={restaurantList[0].data.name} cuisines ={restaurantList[0].data.cuisines} />
     <RestCard name ={restaurantList[1].data.name} cuisines ={restaurantList[1].data.cuisines}/>
     <RestCard name ={restaurantList[2].data.name} cuisines ={restaurantList[1].data.cuisines}/>
    </div>
    </>
  )
}

export default Body;