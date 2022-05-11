import "./card.style.css";

const Card = ({ winner }) => {
  const { awardYear, laureates } = winner;

  let motivation = "";
  let motivationToPrint = "";

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-container-back">
          <div className="card-title">
            {laureates ? (
              laureates.map((person) => {
                if (motivation === "") {
                  motivationToPrint = person.motivation.en;
                  motivation = person.motivation.en;
                  return (
                    <div key={person.knownName.en}>
                      <h2 className="back-name-title">{person.knownName.en}</h2>
                    </div>
                  );
                }
                if (motivation === person.motivation.en) {
                  motivation = person.motivation.en;
                  return (
                    <div key={person.knownName.en}>
                      <h2 className="back-name-title">
                        <p className="and">&</p>
                        {person.knownName.en}
                      </h2>
                    </div>
                  );
                } else {
                  motivation = person.motivation.en;
                  return (
                    <div key={person.knownName.en}>
                      <p>{motivationToPrint}</p>
                      <h2 className="back-name-title">{person.knownName.en}</h2>
                    </div>
                  );
                }
              })
            ) : (
              <h2 key={awardYear}>No prize was awarded</h2>
            )}
            <p>{motivation}</p>
          </div>
        </div>
        <div className="card-container-front">
          <img
            width={200}
            height={200}
            src={require(`./bilder/bild${awardYear - 1900}.svg`)}
            alt={`winner ${awardYear}`}
          />
          {/* <div className="img-underline"></div> */}
          <div className="card-title">
            {laureates ? (
              laureates.map((person) => (
                <h2 className="front-name-title" key={person.knownName.en}>
                  {person.knownName.en}
                </h2>
              ))
            ) : (
              <h2 key={awardYear} className="front-name-title">
                No prize was awarded
              </h2>
            )}
          </div>
          <div className="card-awardyear">
            <h4>{awardYear}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
