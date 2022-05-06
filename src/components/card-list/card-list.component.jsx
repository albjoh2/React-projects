import Card from "../card/card.component";
import "./card-list.style.css";

const CardList = ({ winners }) => (
  <div className="card-list" key={winners.awardYear}>
    {winners.map((winner) => {
      return <Card winner={winner} />;
    })}
  </div>
);

export default CardList;
