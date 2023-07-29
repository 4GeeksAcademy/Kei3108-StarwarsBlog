import React from "react";
import "../../styles/home.css";
import CharactersList from "../store/CharactersList";
import PlanetsList from "../store/PlanetsList";
import VehiclesList from "../store/VehiclesList";

export const Home = () => (
  <div className="mt-3">
    <div className="cardContainer" style={{ marginBottom: '20px' }}>
      <h1 className="ms-4 mb-3">Characters</h1>
      <CharactersList />
    </div>

    <div className="cardContainer" style={{ marginBottom: '20px' }}>
      <h1 className="ms-4 mb-3">Planets</h1>
      <PlanetsList />
    </div>

    <div className="cardContainer">
      <h1 className="ms-4 mb-3">Vehicles</h1>
      <VehiclesList />
    </div>
  </div>
);