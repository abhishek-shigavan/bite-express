const restaurantCardWithOffer = (RestaurantCard) => {
  return (props) => {
    const {header, subHeader} = props.data.aggregatedDiscountInfoV3
    return (
      <div className="relative flex justify-center">
        <span className="absolute font-extrabold text-current text-white top-[200px]">{header} {subHeader}</span>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default restaurantCardWithOffer;
