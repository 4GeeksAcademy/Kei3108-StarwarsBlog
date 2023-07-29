import React from "react";
import { Link } from "react-router-dom";
import { useCharacterContext } from "../store/Context";

export const Navbar = () => {
  const { favorites, removeFromFavorites } = useCharacterContext(); 

  const handleRemoveFromFavorites = (characterName) => {
    removeFromFavorites(characterName); 
  };

  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <Link to="/">
        <img
          className="me-4"
          style={{ width: "100px", height: "70px", marginLeft: "20px"}}
          src="https://upload.wikimedia.org/wikipedia/commons/4/4d/The_Clone_Wars_Logo_Bleu.JPG"
          alt="Star Wars logo"
        />
      </Link>

      <div className="ms-3">
        <div className="dropdown" style={{ marginRight: "20px"}}>
          <button
            className="btn btn-info dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites {favorites.length}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {favorites && favorites.length > 0 ? (
              favorites.map((favorite, index) => (
                <li key={index}>
                  <div className="d-flex align-items-center" style={{ marginLeft: "10px"}}>
                    <button
                      type="button"
                      className="btn btn-secondary me-1"
                      style={{ backgroundColor: "transparent", border: "none" }}
                      onClick={() => handleRemoveFromFavorites(favorite)}
                    >
                       <i className="fa fa-trash text-dark" />
                    </button>
                    {favorite}
                  </div>
                </li>
              ))
            ) : (
              <li>
                <a className="dropdown-item" href="#">
                  No favorites yet
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
