import React, { useEffect, useState } from "react";
import "./Body.css";
import { restaurantList, IMG_URL } from "../../../config";
import { BsSearch } from "react-icons/Bs";
import { BsFillPatchCheckFill } from "react-icons/Bs";
import Coupon from "../../assets/ticket-perforated.svg";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useOnline from "../../utils/useOnline";

const RestCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
  slaString,
  costForTwoString,
  aggregatedDiscountInfo,
}) => {
  return (
    <>
      <div className="card">
        <img src={IMG_URL + cloudinaryImageId} alt="" className="" />
        <h2>{name}</h2>
        <h3>{cuisines}</h3>
        <div className="food-details">
          <h4>{totalRatingsString} </h4>&middot;
          <p>{slaString}</p> &middot;
          <p>{costForTwoString}</p> <br />
          <span>{BsFillPatchCheckFill}</span>
        </div>
        <hr />
        <div className="food-details2">
          <img src={Coupon} alt="" />{" "}
          <span>{aggregatedDiscountInfo.header}</span>
        </div>
      </div>
    </>
  );
};

const body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]); // copy the data from filteredRestaurant
  const [filteredRestaurnt, setFilteredRestaurnt] = useState([]);

  // [] empty dependency array=> once after render

  useEffect(() => {
    // Api call
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurnt(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <>
        <CheckOnline />
      </>
    );
  }

  //  early return
  // if(!allRestaurant) return null;

  // conditional Rendering
  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          placeholder="search..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <span>
          <BsSearch
            className="search-icon"
            onClick={() => {
              const data = filterData(searchText, allRestaurant);
              setFilteredRestaurnt(data);
            }}
          />
        </span>
      </div>
      <div className="main">
        {filteredRestaurnt?.map((restaurant) => {
          return (
            <Link
              to={"restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default body;

// USEEFFECT - IT TAKKES TO PARAMETER ONE IS CALLBACK FUNCTION
// AND ANOTHER IS DEPENDENCY ARRAY. THIS CALL BACK FUNCTION
// NOT CALL IMMEIDIATELY IT WILL CALL WHENEVER USEFFECT WANTS OR AT A
// SPECIFIC TIME

// 2 hour 35 min
