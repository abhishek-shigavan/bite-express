import { RES_CARD_IMG } from "../utils/config";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { data } = props;
  return (
    <Link to={"/restaurant/" + data.id}>
      <div
        id="resCard"
        className="w-[320px] bg-[#f0f0f0] mx-2 my-3 p-2 rounded-lg hover:border border-solid border-black"
      >
        <div>
          <img
            src={RES_CARD_IMG + data.cloudinaryImageId}
            alt={data.name}
            className="h-[210px] w-[100%] object-cover"
          />
        </div>
        <h1> {data.name}</h1>
        <h2>{data.avgRating}</h2>
        <span>
          <h3>{data.cuisines.join(", ")}</h3>
        </span>
        <h4>{data.areaName}</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
