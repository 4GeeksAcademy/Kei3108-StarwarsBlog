import React from "react";
import { Link } from "react-router-dom";
import { useCharacterContext } from "../store/Context";

const CharactersCard = ({ character }) => {
  const { id, name, image, description1, description2, description3 } =
    character;

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

        <Link to={`/info/character/${id}`}>
          <button type="button" className="btn btn-dark me-5">
            Learn more!
          </button>
        </Link>

        <button
          type="button"
          className={`btn ${isFavorite ? "btn btn-warning": "btn btn-info"}`}
          onClick={handleAddToFavorites}
          style={{ marginLeft: "3px" }}
        >
          {isFavorite ? <i className="fa fa-star text-dark"/> : <i className="far fa-star text-dark"/>}
        </button> 
      </div>
    </div>
  );
};

export default CharactersCard;