import React from "react";
import { Link } from "react-router-dom";
import { useCharacterContext } from "../store/Context";

const PlanetsCard = ({ planet }) => {
  const { id, name, image, description1, description2, description3 } =
    planet;

  const { addToFavorites, favorites } = useCharacterContext();

  const isFavorite = favorites.includes(name);
  const handleAddToFavorites = () => {
    addToFavorites(name); 
  };

  return (
    <div className="card" style={{ width: "15rem" }}>
      <img
        src={image}
        className="card-img-top"
        style={{ height: "14rem" }}
        alt="Star Wars image"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {description1} <br /> {description2} <br /> {description3}
        </p>

        <Link to={`/info/planets/${id}`}>
          <button type="button" className="btn btn-secondary me-2">
            Learn more!
          </button>
        </Link>

        <button
          type="button"
          className={`btn ${isFavorite ? "btn-danger" : "btn-warning"}`}
          onClick={handleAddToFavorites}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
};

export default PlanetsCard;