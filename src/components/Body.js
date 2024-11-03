import { useEffect, useState } from "react";
import reslist from "../utlis/Mockdata";
import ResCard from "./Rescard";

const Body = () => {
  const [filteredList, setFilteredList] = useState(reslist);

  useEffect(() => {
    console.log("hello");
  }, []);

  const filterTopRated = () => {
    const topRatedList = filteredList.filter((res) => res.info.avgRating > 4.5);
    setFilteredList(topRatedList);
  };

  return (
    <div className="body">
      <button className="search" onClick={filterTopRated}>
        Top Rated
      </button>
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
