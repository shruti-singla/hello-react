import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
//import resList from "../utils/mockData";

const Body = () => {
  const [restrauntList, setRestrauntList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.39479305773142&lng=76.97510082274675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    //console.log(json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestrauntList(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  

  if (restrauntList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div
          className="filter-btn"
          onClick={() => {
            const filterdList = restrauntList.filter(
              (res) => res.info.avgRating > 4
            );
            setRestrauntList(filterdList);
          }}
        >
          Top Rated Restraunt
        </div>
      </div>
      <div className="res-container">
        {restrauntList.map((Restraunt) => (
          <RestrauntCard key={Restraunt.info.id} resdata={Restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
