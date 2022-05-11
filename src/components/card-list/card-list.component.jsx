import Card from "../card/card.component";
import "./card-list.style.css";

const CardList = ({ winners }) => (
  <div className="card-list">
    {winners.map((winner) => {
      return <Card key={winner.awardYear} winner={winner} />;
    })}
  </div>
);

export default CardList;
