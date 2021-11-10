import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import AddService from "./components/AddService/AddService";
import Services from "./components/Services/Services";
import Booking from "./components/Booking/Booking";
import Login from "./components/Login/Login";
import AuthProvider from "./components/contexts/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import About from './components/About/About'
import Orders from "./components/Orders/Orders";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
          <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
           
            <PrivateRoute path="/add-servicce">
              <AddService></AddService>
            </PrivateRoute>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/services/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/news">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
