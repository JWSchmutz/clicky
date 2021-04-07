import React, { useState } from "react";
import "./App.css";
import ClickableImage from "./components/LuckyImage";
import players from "./data";

const statePlayers = players.map((player) => ({
  name: player,
  src: require(`./images/${player}.jpg`),
}));

const App = () => {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [alreadyClicked, setalreadyClicked] = useState([]);
  const [images, setImages] = useState(statePlayers);

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
