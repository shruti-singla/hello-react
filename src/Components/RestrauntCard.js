import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resdata } = props;
  const { cloudinaryImageId, cuisines, name, costForTwo, avgRating } =
    resdata?.info;
  const { deliveryTime } = resdata?.info?.sla;
  return (
    <div className="res-card w-[250px]  rounded-lg m-4 p-4 bg-gray-100 hover:bg-gray-200 h-[400px]">
      <div className="res-img">
        <img
          alt="no"
          className="food-image rounded-lg w-[218px] h-40"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
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

export const withPromotedLabel = (RestrauntCard) => {
  return (props) =>{
    return(
      <div>
        <label className="absolute m-2 p-2 bg-black text-white rounded-lg">Promoted</label>
        <RestrauntCard {...props} />
      </div>
    )
  }
}

export default RestrauntCard;
