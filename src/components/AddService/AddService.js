import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("https://intense-ravine-25272.herokuapp.com/services", data).then((res) => {
      if (res.data.insertedID) {
        alert("Added service successfully!");
        reset();
      }
    }); 
  };

  return (
    <div className="add-service">
      <h2>Add services</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("Name", { required: true, maxLength: 20 })}
          placeholder=" Name"
        />{" "}
        <br />
        <input {...register("description")} placeholder="short-description" />
        <input {...register("img")} placeholder="Img URL" />
        <input className='mt-3' type="submit" />
      </form>
    </div>
  );
};
export default AddService;
