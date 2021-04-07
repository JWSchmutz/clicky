import React, { Component } from "react";
import "./App.css";
import LuckyImage from "./components/LuckyImage";

class App extends Component {
  state = {
    wins: 0,
    losses: 0,
    alreadyClicked: [],
    images: [
      { name: "horseshoe", src: require("./images/horseshoe.png") },
      { name: "rainbow", src: require("./images/rainbow.png") },
      { name: "clover", src: require("./images/clover.png") }
    ]
  };

  handleClick = name => {
    this.state.images.sort((a, b) => 0.5 - Math.random());
    if (this.state.alreadyClicked.includes(name)) {
      this.setState({ losses: this.state.losses + 1 });
    } else {
      const newAlreadyClicked = this.state.alreadyClicked;
      newAlreadyClicked.push(name);
      if (newAlreadyClicked.length === this.state.images.length) {
        this.setState({ wins: this.state.wins + 1, alreadyClicked: [] });
      } else {
        this.setState({ alreadyClicked: newAlreadyClicked });
      }
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Lucky Game!</h1>
          <h3>Wins: {this.state.wins}</h3>
          <h3>Losses: {this.state.losses}</h3>
          <div>
            {this.state.images.map(image => (
              <LuckyImage
                image={image.src}
                key={image.name}
                onClick={() => this.handleClick(image.name)}
              />
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
