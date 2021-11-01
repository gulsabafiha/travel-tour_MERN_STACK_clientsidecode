import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import "./Booking.css";

const Booking = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/services/${serviceId}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("deleted succesfully");
          const reamaining = services.filter(service => service._id !== id);
          setServices(reamaining);
        }
      });
  };

  const handleBooking = () => {

    return <div></div>;
  };

  return (
    <div className="offer-container">
      <h2>Details of the Offering you Query:{services.Name}</h2>
      <img src={services.img} height="100px" className="m-5" />
      <p>{services.description}</p>
      <button className="m-5" onClick={() => handleDelete(services._id)}>
        Delete
      </button>
      <button className="m-5" onClick={() => handleBooking(services._id)}>
        Book Now
      </button>
    </div>
  );
};

export default Booking;
