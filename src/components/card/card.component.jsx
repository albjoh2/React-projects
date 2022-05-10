import "./card.style.css";

const Card = ({ winner }) => {
  const { awardYear, laureates } = winner;

  return (
    <div className="card-container" key={awardYear}>
      <img
        width={200}
        height={200}
        src={require(`./bilder/bild${awardYear - 1900}.svg`)}
        alt={`winner ${awardYear}`}
      />
      <div className="card-title" key={awardYear}>
        {laureates ? (
          laureates.map((person) => (
            <h2 key={person.knownName.en}>{person.knownName.en}</h2>
          ))
        ) : (
          <h2 key={awardYear}>No prize was awarded</h2>
        )}
      </div>
      <div className="card-awardyear">
        <p>{awardYear}</p>
      </div>
    </div>
  );
};

export default Card;
