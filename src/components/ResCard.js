const ResCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    areaName,
    costForTwo,
    sla,
  } = props.resData.info;

  return (
    <div className="card">
      <img
        className="res-logo"
        alt="Restaurant logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <h5>Cost for Two: {costForTwo}</h5>
      <p>
        Delivery Time: {sla.slaString} (within {sla.lastMileTravelString})
      </p>
    </div>
  );
};
export default ResCard;
