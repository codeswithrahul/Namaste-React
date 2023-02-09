// from the body
// If you are creating a custom hook then try to use smallcase eg : useRest

// -- useRestaurant fetch the data for us

import React, { useEffect, useState } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantsInfo();
  }, []);

  async function getRestaurantsInfo() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/v4/full?lat=30.3164945&lng=78.03219179999999&menuId=" +
          id
      );
      const json = await response.json();
      console.log(json.data);
      setRestaurant(json.data);
    } catch (err) {
      console.log(err);
    }
  }

  return restaurant;
};

export default useRestaurant;
