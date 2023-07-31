import RestrauntCard from "./RestrauntCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [restrauntList, setRestrauntList] = useState(resList);

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
