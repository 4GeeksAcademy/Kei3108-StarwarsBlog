import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InfoPlanetsCard = () => {
  const { id } = useParams();
  const [planet, setPlanets] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        const planetsData = {
          id: data.result.uid,
          name: data.result.properties.name,
          image: `https://starwars-visualguide.com/assets/img/planets/${data.result.uid}.jpg`,
          description1: `Population: ${data.result.properties.population}`,
          description2: `Rotation Period: ${data.result.properties.rotation_period} days`,
          description3: `Orbital Period: ${data.result.properties.orbital_period} days`,
          description4: `Diameter: ${data.result.properties.diameter} km`,
          description5: `Gravity: ${data.result.properties.gravity}`,
        };

        setPlanets(planetsData);
      })
      .catch((err) => console.error(err));
  }, [id]);  

  if (!planet) {
    return <h1>Loading...</h1>;
  }

  const {
    name,
    image,
    description1,
    description2,
    description3,
    description4,
    description5,
  } = planet;

  return (
    <div className="container-center">
      <div
        className="card ms-3 mb-3"
        style={{
          width: "70%",
          height: "70%",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
          <img src={image}
            onError={({ currentTarget }) => {
           currentTarget.onerror = null;
           currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
         }}
            className="img-fluid rounded-start h-100" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <h4 className="card-title">Information about:</h4>
              <p className="card-text">
                {description1} <br /> {description2} <br /> {description3} <br />
                {description4} <br />
                {description5}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  A character within the Star Wars universe.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPlanetsCard;