import React from "react";
import './Service.css';
import { Link } from "react-router-dom";

const Service = props => {
const{img,description,Name,_id}=props.service;


  return (
    <div className='mx-auto'>
      <div className="card" style={{width: '18rem'}}>
        <img src={img} class="card-img-top" height='100px' alt="" />
        <div class="card-body">
          <h5 class="card-title">{Name}</h5>
          <p class="card-text">
           {description}
          </p>
          <Link to={`/services/${_id}`}>
            <button>See Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Service;
