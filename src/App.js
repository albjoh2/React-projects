import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value, setValue]
  const [winners, setWinners] = useState([]);
  const [filteredWinners, setFilterWinners] = useState(winners);

  console.log("render");

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

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       winners: [],
//       searchField: "",
//     };
//   }

// componentDidMount() {
//   fetch(
//     "https://api.nobelprize.org/2.1/nobelPrizes?limit=150&sort=asc&nobelPrizeCategory=phy&format=json&csvLang=se"
//   )
//     .then((response) => response.json())
//     .then(
//       (users) =>
//         this.setState(() => {
//           const nobel = users.nobelPrizes;
//           return { winners: nobel };
//         }),
//     );
// }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { winners, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredwinners = winners.filter((winner) => {
//       return (winner.laureates ? winner.laureates[0].knownName.en : "no prize")
//         .toLowerCase()
//         .includes(searchField);
//       // winner.awardYear.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="title">Nobel award winners in physics</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="Search winners"
//           className="winners-search-box"
//         />
//         <CardList winners={filteredwinners} />
//       </div>
//     );
//   }
// }

export default App;
