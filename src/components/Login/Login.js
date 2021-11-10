import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../hook/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, setUser, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const handleGooglelogin = () => {
    signInUsingGoogle().
    then((result) => {
      setUser(result.user);
      history.push(redirect_url);
    })
    .catch((error)=>{
      const errorCode=error.code;
      const errorMessage=error.message;
    })
    .finally(()=> setIsLoading(false));
  };
  
  return (
    <div className='login-container'>
      <h2>Login Page</h2>
      <button className="m-5" onClick={handleGooglelogin}>
        Google sign in
      </button>
    </div>
  );
};
export default Login;
