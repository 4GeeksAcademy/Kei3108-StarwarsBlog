import React, { useEffect, useState } from "react";
import PlanetsCard from "../component/PlanetsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlanetsList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets/")
      .then((response) => response.json())
      .then((data) => {
        const planetsURLs = data.results.map((result) => result.url);

        Promise.all(
          planetsURLs.map((url) => fetch(url).then((response) => response.json()))
        )
          .then((planetsData) => {
            const planetsDetails = planetsData.map((data) => ({
              id: data.result.uid,
              name: data.result.properties.name,
              image: `https://starwars-visualguide.com/assets/img/planets/${data.result.uid}.jpg`,
              description1: `Population: ${data.result.properties.population}`,
              description2: `Rotation Period: ${data.result.properties.rotation_period} days`,
              description3: `Orbital Period: ${data.result.properties.orbital_period} days`,
            }));

            setPlanets(planetsDetails);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="planetsList">
      {planets.length > 0 && (
        <Slider {...sliderSettings}>
          {planets.map((planet) => (
            <PlanetsCard key={planet.id} planet={planet} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default PlanetsList;

