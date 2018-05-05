import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <div className="header">
        {/* <header className="App-header">Welcome to CYF Hotel</header> */}
        <img
          src="https://codeyourfuture.io/static/media/cyf_brand.fbcea877.png"
          className="image"
        />
      </div>
    );
  }
}

export default Logo;
