import React from "react";
import CardList from "./components/CardList/CardList";
import cardsData from "./data";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Галерея карток</h1>
      <CardList cards={cardsData} />
    </div>
  );
};

export default App;
