import React, { Component } from "react";

import Bookings from "./containers/Bookings.js";
import Footer from "./components/Footer.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Welcome to CYF Hotel</header>
        <img
          src="https://codeyourfuture.io/static/media/cyf_brand.fbcea877.png"
          className="image"
        />

        <Bookings />
        <Footer />
      </div>
    );
  }
}

export default App;
