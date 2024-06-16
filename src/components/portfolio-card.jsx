import React from "react";

const Card = ({ image, name }) => {
  return (
    <div className="border rounded-lg overflow-hidden group">
      <div className="overflow-hidden h-40 border-b">
        <img
          className="object-cover h-full w-full duration-300 group-hover:scale-110"
          src={image}
          alt={name}
        />
      </div>
      <div className="text-center p-3">{name}</div>
    </div>
  );
};

export default Card;
