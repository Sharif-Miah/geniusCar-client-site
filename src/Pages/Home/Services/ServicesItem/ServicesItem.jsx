import React from "react";
import { FiArrowRight } from 'react-icons/fi';

const ServicesItem = ({service}) => {
    const { img, title, price} = service;
  return (
      <div className="card card-compact w-96 bg-base-100 border border-zinc-300 mx-auto">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-red-500 font-bold">Price: ${price}</p>
          <div className="card-actions justify-end">
            <button className="text-red-500 text-2xl"><FiArrowRight/></button>
          </div>
        </div>
      </div>
  );
};

export default ServicesItem;
