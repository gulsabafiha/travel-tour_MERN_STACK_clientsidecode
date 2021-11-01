import React from "react";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';
import useAuth from '../hook/useAuth';
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (

    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link class="navbar-brand site-logo" to="/home">
           Travel$Tour
          </Link>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/home">
               Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/add-servicce">
               Add Service
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/services">
              Services
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About US
              </Link>
            </li>
            {user?.email ? (
              <Button onClick={logOut} variant="light">
                Logout
              </Button>
            ) : (
              <li>
              <Link className='nav-link' to="/login">
                LogIn
              </Link>
              </li>
            )}
            <p>
              Signed in as: {user?.displayName}
            </p>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
