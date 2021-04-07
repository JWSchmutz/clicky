import React, { useState } from "react";
import "./App.css";
import ClickableImage from "./components/LuckyImage";

const App = () => {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [alreadyClicked, setalreadyClicked] = useState([]);
  const [images, setImages] = useState([
    { name: "davis", src: require("./images/davis.jpg") },
    { name: "durant", src: require("./images/durant.jpg") },
    { name: "giannis", src: require("./images/giannis.jpg") },
    { name: "harden", src: require("./images/harden.jpg") },
    { name: "kawhi", src: require("./images/kawhi.jpg") },
    { name: "lebron", src: require("./images/lebron.jpg") },
    { name: "luka", src: require("./images/luka.jpg") },
    { name: "stephen", src: require("./images/stephen.jpg") },
  ]);

  const handleClick = (name) => {
    const newImages = images.sort((a, b) => 0.5 - Math.random());
    setImages(newImages);
    if (alreadyClicked.includes(name)) {
      setLosses(losses + 1);
    } else {
      const newAlreadyClicked = [...alreadyClicked];
      newAlreadyClicked.push(name);
      if (newAlreadyClicked.length === images.length) {
        setWins(wins + 1);
        setalreadyClicked([]);
      } else {
        setalreadyClicked(newAlreadyClicked);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Memory Game!</h1>
        <h2>Click each picture exactly one time to win!</h2>
        <h3>Wins: {wins}</h3>
        <h3>Losses: {losses}</h3>
        <div>
          {images.map((image) => (
            <ClickableImage
              image={image.src}
              key={image.name}
              onClick={() => handleClick(image.name)}
            />
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
