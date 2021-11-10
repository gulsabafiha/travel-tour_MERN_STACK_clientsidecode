import React, { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import Order from "../Order/Order";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://intense-ravine-25272.herokuapp.com/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);


  return (
    <div className='order'>
      {orders.map((order) => (
        <Order key={order._id} order={order} orders={orders} setOrders={setOrders} ></Order>
      ))}
     
    </div>
  );
};
export default Orders;
