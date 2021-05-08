import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

// Add title
const title = "";

const showBackground = true;

// Add background
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

// Add image array
const images = [];

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      onClick={displayFact}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
    />
  );
}

// Event listener
// Pick random fact based on selected animal
function displayFact(e) {
  // Get animal name being click
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];

  // Generate random index for randomised fact
  const index = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[index];

  // Render fact in UI
  const elFact = document.getElementById("fact");
  elFact.innerHTML = funFact;
}

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact!" : title}</h1>
    {showBackground && background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
