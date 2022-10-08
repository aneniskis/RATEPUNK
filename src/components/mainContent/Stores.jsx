import React from "react";
import { stores } from "../../constant/constant";
import Rating from "./Rating";
import "./stores.scss";
import { useNavigate } from "react-router-dom";

export const Stores = () => {
  const navigate = useNavigate();
  return (
    <div className="storesContainer">
      <div className="storesContent">
        {stores.map((store, i) => (
          <div
            key={i}
            className="card"
            // onClick={() => navigate(window.location.replace(store.link))}
            onClick={() => navigate(window.open(store.link))}
          >
            <img src={store.image} alt="store" />
            <div>
              <span>{store.content}</span>
              <p>{store.store}</p>
            </div>
          </div>
        ))}
        <div className="review">
          <Rating />
          <span>Chrome Store review</span>
        </div>
      </div>
    </div>
  );
};
