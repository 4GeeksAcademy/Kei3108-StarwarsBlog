import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InfoVehiclesCard = () => {
  const { id } = useParams();
  const [vehicle, setVehicles] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        const vehiclesData = {
          id: data.result.uid,
          name: data.result.properties.name,
          image: `https://starwars-visualguide.com/assets/img/vehicles/${data.result.uid}.jpg`,
          description1: `Model: ${data.result.properties.model}`,
          description2: `Cost in credits: ${data.result.properties.cost_in_credits}`,
          description3: `Passengers: ${data.result.properties.passengers}`,
          description4: `Manufacturer: ${data.result.properties.manufacturer}`,
          description5: `Length: ${data.result.properties.length}`,
        };
        setVehicles(vehiclesData);
      })
      .catch((err) => console.error(err));
  }, [id]);  

  if (!vehicle) {
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
  } = vehicle;

  return (
    <div
      className="card ms-4 mb-3"
      style={{
        width: "96%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start h-100" alt="..."/>
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
                A vehicle within the Star Wars universe.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoVehiclesCard;