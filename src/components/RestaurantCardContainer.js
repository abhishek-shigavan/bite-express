import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";
import { useState } from "react";

const RestaurantCardContainer = () => {
  const [resData, setResData] = useState(mockData);

  return (
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
      <div id="resCardCnt" className="res-card-cnt">
        {resData.map((res) => {
          return <RestaurantCard key={res.info?.id} data={res.info} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantCardContainer;
