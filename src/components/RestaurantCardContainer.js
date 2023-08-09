import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

const RestaurantCardContainer = () => {
  const [resData, setResData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resJSON = await res.json();
    setResData(
      resJSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredData(
      resJSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return resData?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div id="resCardMainCnt" className="res-card-main-cnt">
      <button
        id="topRateFilter"
        className="top-rate-filter"
        onClick={() => {
          setResData(resData.filter((res) => res.info.avgRating > 4.2));
        }}
      >
        Top Rated Restaurants
      </button>
      <input
        type="text"
        value={searchVal}
        onChange={(e) => {
          setSearchVal(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          const filteredList = filteredData.filter((res) =>
            res.info.name.toLowerCase().includes(searchVal.toLowerCase())
          );
          setResData(filteredList);
        }}
      >
        Search
      </button>
      <div id="resCardCnt" className="res-card-cnt">
        {resData?.map((res) => {
          return <RestaurantCard key={res.info?.id} data={res.info} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantCardContainer;
