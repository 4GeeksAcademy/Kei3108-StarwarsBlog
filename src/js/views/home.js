import React from "react";
import "../../styles/home.css";
import CharactersList from "../store/CharactersList";
import PlanetsList from "../store/PlanetsList";
import VehiclesList from "../store/VehiclesList";

export const Home = () => (
  <div className=" mt-3">
    <div className="cardContainer">
      <h1 className="ms-4">Characters</h1>
      <CharactersList />
      <h1 className="ms-4">Planets</h1>
      <PlanetsList />
      <h1 className="ms-4">Vehicles</h1>
      <VehiclesList />
    </div>
  </div>
);