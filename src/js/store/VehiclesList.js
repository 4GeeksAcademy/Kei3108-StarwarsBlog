import React, { useEffect, useState } from "react";
import VehiclesCard from "../component/VehiclesCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles/")
      .then((response) => response.json())
      .then((data) => {
        const vehiclesURLs = data.results.map((result) => result.url);

        Promise.all(
          vehiclesURLs.map((url) =>
            fetch(url).then((response) => response.json())
          )
        )
          .then((vehiclesData) => {
            const vehiclesDetails = vehiclesData.map((data) => ({
              id: data.result.uid,
              name: data.result.properties.name,
              image: `https://starwars-visualguide.com/assets/img/vehicles/${data.result.uid}.jpg`,
              description1: `Model: ${data.result.properties.model}`,
              description2: `Cost in credits: ${data.result.properties.cost_in_credits}`,
              description3: `Passengers: ${data.result.properties.passengers}`,
            }));

            setVehicles(vehiclesDetails);
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
    <div className="vehiclesList">
      {vehicles.length > 0 && (
        <Slider {...sliderSettings}>
          {vehicles.map((vehicle) => (
            <VehiclesCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default VehiclesList;