import React from "react";
import "./Body.css";
import {restaurantList, IMG_URL} from "../../config";

const BurgerKing = {
  name : "BurgerKing",
  image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qnfkbrlvqqyfvygbfihj",
  cuisines:["Burger",",", " American"],
  rating:"4.2",

}

const RestCard = ( {name,cuisines,cloudinaryImageId,lastMileTravelString} ) => {
  return (
    <>
      <div className="card">
        <img src={IMG_URL+ cloudinaryImageId} alt="" className=""/>
        <h2>{name}</h2>
        <h3>{cuisines}</h3>
        <h4>{lastMileTravelString} stars</h4>
      </div>
    </>
  );
};

const body = () => {
  return (
    <>
    <div className="main">
    {
      restaurantList.map(restaurant =>{
         return (
          <RestCard {...restaurant.data} />
         )
      })
    }
    </div>
      
    </>
  );
};

export default body;
