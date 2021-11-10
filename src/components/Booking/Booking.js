import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../hook/useAuth";
import axios from "axios";
import "./Booking.css";

const Booking = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://intense-ravine-25272.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  

  const onSubmit = (data) => {
    axios.post("https://intense-ravine-25272.herokuapp.com/orders", data).then((res) => {
      console.log(res);
      if (res.data.insertedID) {
        alert("Ordered service successfully!");
        reset();
      }
    });
  };

  return (
    <div className="booking-container">
      <div className="offer-container">
        <h2>Details of the Offering you Query:{services.Name}</h2>
        <img src={services.img} height="100px" className="m-5" />
        <p>{services.description}</p>
      </div>

      <div className="form-container">
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue={services.Name} {...register("service")} />
          <input defaultValue={user.displayName} {...register("name")} />

          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Address"
            defaultValue=""
            {...register("address")}
          />
          <input placeholder="City" defaultValue="" {...register("city")} />
          <input
            placeholder="phone number"
            defaultValue=""
            {...register("phone")}
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Booking;
