import RestrauntCard, { withPromotedLabel } from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constants";
import useStatus from "../utils/useStatus";

const Body = () => {
  const [restrauntList, setRestrauntList] = useState([]);
  const [filterdList, setfilterdList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestrauntCardPromted = withPromotedLabel(RestrauntCard);

  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();

    setRestrauntList(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterdList(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const status = useStatus();
  if (status === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection!!
      </h1>
    );
  }

  return restrauntList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="searchBox border border-solid border-black"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 mr-0 bg-green-100 rounded-lg border border-green-400 hover:bg-green-200"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-2 ml-0 bg-green-100 rounded-lg border border-green-400 hover:bg-green-200"
            onClick={() => {
              const filterRestaurant = restrauntList.filter(
                (res) => res.info.avgRating > 4
              );
              setfilterdList(filterRestaurant);
            }}
          >
            Top Rated Restraunt
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filterdList?.map((Restraunt) => (
          <Link key={Restraunt.info.id} to={"/Restaurant/" + Restraunt.info.id}>
            {Restraunt.info.avgRating > 4 ? (
              <RestrauntCardPromted resdata={Restraunt} />
            ) : (
              <RestrauntCard resdata={Restraunt} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
