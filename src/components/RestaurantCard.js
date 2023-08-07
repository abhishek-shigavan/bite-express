import { RES_CARD_IMG } from "../utils/config";

const RestaurantCard = (props) => {
  const { data } = props;
  return (
    <div id="resCard" className="res-card">
      <img
        className="res-card-img"
        src={RES_CARD_IMG + data.cloudinaryImageId}
        alt={data.name}
      />
      <h1> {data.name}</h1>
      <h2>{data.avgRating}</h2>
      <span>
        <h3>{data.cuisines.join(", ")}</h3>
      </span>
      <h4>{data.areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
