import "./card.style.css";

const Card = ({ winner }) => {
  const { awardYear, laureates } = winner;

  let motivation = "";
  let motivationToPrint = "";

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-container-back" key={awardYear}>
          <div className="card-title" key={awardYear}>
            {laureates ? (
              laureates.map((person) => {
                console.log(person);
                if (motivation === "") {
                  motivationToPrint = person.motivation.en;
                  motivation = person.motivation.en;
                  return (
                    <div>
                      <h2 className="back-name-title" key={person.knownName.en}>
                        {person.knownName.en}
                      </h2>
                    </div>
                  );
                }
                if (motivation === person.motivation.en) {
                  motivation = person.motivation.en;
                  return (
                    <div>
                      <h2 className="back-name-title" key={person.knownName.en}>
                        & <br></br> {person.knownName.en}
                      </h2>
                    </div>
                  );
                } else {
                  motivation = person.motivation.en;
                  return (
                    <div>
                      <p key={motivation}>{motivationToPrint}</p>
                      <h2 className="back-name-title" key={person.knownName.en}>
                        {person.knownName.en}
                      </h2>
                    </div>
                  );
                }
              })
            ) : (
              <h2 key={awardYear}>No prize was awarded</h2>
            )}
            <p key={motivation}>{motivation}</p>
          </div>
        </div>
        <div className="card-container-front" key={awardYear + 10000}>
          <img
            width={200}
            height={200}
            src={require(`./bilder/bild${awardYear - 1900}.svg`)}
            alt={`winner ${awardYear}`}
          />
          {/* <div className="img-underline"></div> */}
          <div className="card-title" key={awardYear}>
            {laureates ? (
              laureates.map((person) => (
                <h2 className="front-name-title" key={person.knownName.en}>
                  {person.knownName.en}
                </h2>
              ))
            ) : (
              <h2 className="front-name-title" key={awardYear}>
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
