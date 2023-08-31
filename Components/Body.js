import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constants";
import useStatus from "../utils/useStatus";

const Body = () => {
  const [restrauntList, setRestrauntList] = useState([]);
  const [filterdList, setfilterdList] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // setIsLoading(true);
    const data = await fetch(RES_API);
    const json = await data.json();

    setRestrauntList(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterdList(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // setIsLoading(false);
  };

  const status = useStatus();
  if(status === false){
    return (
      <h1>Looks like you're offline!! Please check your internet connection!!</h1>
    )
  }

  return (restrauntList?.length===0) ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter logic

              const filteredRestaurant = restrauntList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(searchText);
              setfilterdList(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <div
          className="filter-btn"
          onClick={() => {
            const filterRestaurant = restrauntList.filter(
              (res) => res.info.avgRating > 4
            );
            setfilterdList(filterRestaurant);
          }}
        >
          Top Rated Restraunt
        </div>
      </div>
      <div className="res-container">
        {filterdList?.map((Restraunt) => (
          <Link key={Restraunt.info.id} to = {"/Restaurant/" + Restraunt.info.id}>
            <RestrauntCard resdata={Restraunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
