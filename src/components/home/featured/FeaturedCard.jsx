import React from "react";

const FeaturedCard = ({ item }) => {
  return (
    <>
      <div className="box" key={item._id}>
        <img src={item.cover_url} alt="" />
        <h4>{item.name}</h4>
        <label>{item.total}</label>
      </div>
    </>
  );
};

export default FeaturedCard;
