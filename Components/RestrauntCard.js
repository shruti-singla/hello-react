import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resdata } = props;
  const { cloudinaryImageId, cuisines, name, costForTwo, avgRating } =
    resdata?.info;
  const { deliveryTime } = resdata?.info?.sla;
  return (
    <div className="res-card">
      <div className="res-img">
        <img
          alt="no"
          className="food-image"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <h3 className="res-name">{name}</h3>
      <div className="cuisne">
        <h4>{cuisines.join(", ")}</h4>
      </div>
      <div className="rating">
        <h4>{costForTwo}</h4>
      </div>
      <div className="rating">
        <h4>{avgRating} stars</h4>
      </div>
      <div className="eta">
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestrauntCard;
