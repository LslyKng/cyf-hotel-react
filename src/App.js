import React, { Component } from "react";
import Logo from "./components/Logo.js";
import Bookings from "./containers/Bookings.js";
import Footer from "./components/Footer.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Bookings />
        <Footer />
      </div>
    );
  }
}

export default App;
