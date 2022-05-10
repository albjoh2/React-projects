import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value, setValue]
  const [winners, setWinners] = useState([]);
  const [filteredWinners, setFilterWinners] = useState(winners);

  useEffect(() => {
    fetch(
      "https://api.nobelprize.org/2.1/nobelPrizes?limit=150&sort=asc&nobelPrizeCategory=phy&format=json&csvLang=se"
    )
      .then((response) => response.json())
      .then((users) => setWinners(users.nobelPrizes));
  }, []);

  useEffect(() => {
    const newFilteredWinners = winners.filter((winner) => {
      return (winner.laureates ? winner.laureates[0].knownName.en : "no prize")
        .toLowerCase()
        .includes(searchField);
      //       // winner.awardYear.toLowerCase().includes(searchField);
    });

    setFilterWinners(newFilteredWinners);
  }, [winners, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="title">Nobel award winners in physics</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search winners"
        className="winners-search-box"
      />
      <CardList winners={filteredWinners} />
    </div>
  );
};

export default App;
