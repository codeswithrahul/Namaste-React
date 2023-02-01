import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../../../config.js";
import "./RestMenu.css";
import { BsStarFill } from "react-icons/Bs";
import { MdLocalOffer } from "react-icons/Md";
import useRestaurant from "../../utils/useRestaurant.js";

const RestaurantMenu = () => {
  // const [restaurant, setRestaurant] = useState({});

  const { id } = useParams();
  const restaurant = useRestaurant(id);

  return !restaurant ? (
    "loading"
  ) : (
    <div className="menu-container">
      <div className="main-container">
        <div className="first-container">
          <div className="img-container">
            <img
              src={IMG_URL + restaurant.cloudinaryImageId}
              alt="logo"
              className="menu-img"
            />
          </div>
          <div className="img-details-container">
            <h2>{restaurant?.name}</h2>
            <h3>{restaurant?.cuisines}</h3>
            <h4>
              {restaurant?.city}, {restaurant?.area}
            </h4>
            <div className="rating-time-cost-container">
              <div className="rating">
                <span>
                  <BsStarFill /> <span>4.2</span>
                </span>{" "}
                <br />
                <span>{restaurant?.totalRatingsString}</span>
              </div>
              <div className="time">
                <span>33 mins</span> <br />
                <span>Delivery Time</span>
              </div>
              <div className="cost">
                <span>{restaurant.costForTwoMsg}</span> <br />
                <span>for two</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="offers-container">
            <p>OFFER</p>
            <p>
              <MdLocalOffer className="coupon-icon" />
              Flat ₹125 off on orders above ₹249 |<br /> Use code FLAT125
            </p>{" "}
            <br />
            <p>
              <MdLocalOffer className="coupon-icon" />
              50% off | Use WELCOME50
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
