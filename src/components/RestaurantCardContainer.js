import RestaurantCard from "./RestaurantCard";
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
    <>
      <div className="flex mx-2 my-4 justify-evenly">
        <button
          id="topRateFilter"
          className="border border-solid border-black rounded-[4px] px-4"
          onClick={() => {
            setResData(resData.filter((res) => res.info.avgRating > 4.2));
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <input
            className="border border-solid border-black rounded-[4px]"
            type="text"
            value={searchVal}
            onChange={(e) => {
              setSearchVal(e.target.value);
            }}
          ></input>
          <button
            className="border border-solid border-black rounded-[4px] px-4 bg-violet-200 mx-3"
            onClick={() => {
              const filteredList = filteredData.filter((res) =>
                res.info.name.toLowerCase().includes(searchVal.toLowerCase())
              );
              setResData(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div id="resCardCnt" className="flex flex-wrap justify-between mx-2 my-3">
        {resData?.map((res) => {
          return <RestaurantCard key={res.info?.id} data={res.info} />;
        })}
      </div>
    </>
  );
};

export default RestaurantCardContainer;
