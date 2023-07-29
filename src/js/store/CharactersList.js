import React, { useEffect, useState } from "react";
import CharactersCard from "../component/CharactersCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((response) => response.json())
      .then((data) => {
        const characterURLs = data.results.map((result) => result.url);

        Promise.all(
          characterURLs.map((url) => fetch(url).then((response) => response.json()))
        )
          .then((charactersData) => {
            const characterDetails = charactersData.map((data) => ({
              id: data.result.uid,
              name: data.result.properties.name,
              image: `https://starwars-visualguide.com/assets/img/characters/${data.result.uid}.jpg`,
              description1: `Height: ${data.result.properties.height} cm`,
              description2: `Mass: ${data.result.properties.mass} kg`,
              description3: `Eye color: ${data.result.properties.eye_color}`,
            }));

            setCharacters(characterDetails);
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
    <div className="charactersList">
      {characters.length > 0 && (
        <Slider {...sliderSettings}>
          {characters.map((character) => (
            <CharactersCard key={character.id} character={character} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CharactersList;
