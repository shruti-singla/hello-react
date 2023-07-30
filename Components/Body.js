import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resList.map((Restraunt) => (
            <RestrauntCard key = {Restraunt.info.id} resdata={Restraunt} />
          ))}
        </div>
      </div>
    );
  };

export default Body;