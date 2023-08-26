import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restrauntList, setRestrauntList] = useState([]);
  const [filterdList, setfilterdList] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("body rendered");

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
    setfilterdList(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restrauntList.length === 0 ? (
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
        {filterdList.map((Restraunt) => (
          <Link key={Restraunt.info.id} to = {"/Restaurant/" + Restraunt.info.id}>
            <RestrauntCard resdata={Restraunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
