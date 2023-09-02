import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  let itemCards;
  // console.log(
  //   Object.keys(
  //     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card
  //   )
  // );
  // console.log(
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card
  // );
  if (
    Object.keys(
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card
    ).includes(itemCards)
  ) {
    itemCards =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
  } else {
    itemCards =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;
  }

  return (
    <div className="">
      <h1 className="font-bold m-6 text-3xl">{name}</h1>
      <p className="m-4 pl-4">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2 className="m-4 font-bold text-xl">Menu</h2>
      <ul className="list-disc ml-4">
        {itemCards?.map((item) => (
          <li key={item.card.info.id} className="m-4 ">
            <span className="font-semibold">{item.card.info.name}</span> - {"Rs. "}
            {item.card.info.price / 100 || item.card.info.defaultPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
