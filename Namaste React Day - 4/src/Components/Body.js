import React from "react";
import "./Body.css";
import {restaurantList} from "../../config"

const BurgerKing = {
  name : "BurgerKing",
  image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qnfkbrlvqqyfvygbfihj",
  cuisines:["Burger",",", " American"],
  rating:"4.2",

}

const RestCard = () => {
  return (
    <>
      <div className="card">
        <img src={BurgerKing.image} alt="" className=""/>
        <h2>{BurgerKing.name}</h2>
        <h3>{BurgerKing.cuisines}</h3>
        <h4>{BurgerKing.rating} stars</h4>
      </div>
    </>
  );
};

const body = () => {
  return (
    <>
    <div className="main">
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />

    </div>
      
    </>
  );
};

export default body;
