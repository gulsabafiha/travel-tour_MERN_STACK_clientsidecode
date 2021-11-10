import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Order.css";

const Order = ({order,orders,setOrders}) => {
  const { name, email, service,_id } = order;
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://intense-ravine-25272.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://intense-ravine-25272.herokuapp.com/orders/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("deleted succesfully");
            const reamaining = orders.filter((service) => service._id !== id);
            setOrders(reamaining);
          }
        });
    }
  };

  return (
    <div class="card" style={{ width: "18rem" }}>
      <div>
      <h5 class="card-text">{service}</h5>
      <h6 class="card-text">{name}</h6>
      <h6>{email}</h6> <br />
      <button className="m-5" onClick={() => handleDelete(_id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Order;
