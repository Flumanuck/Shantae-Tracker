import LampImage from "./assets/lamp-symbol.png";

function getThumbnail(url) {
  return `/Shantae-Tracker/${url}`;
}

export function MerchGrid(props) {
  return (
    <div className="centered">
      <div className="cardsAll">
        {props.merchItems.map((item) => (
          <div key={item.id} className="card">
            <div className="cardContent">
              <div className="lampContainer">
                {(item.haveState === "need" || item.haveState === "owned") && (
                  <img src={LampImage} alt="lamp icon"></img>
                )}
              </div>
              <img
                className="thumbnail"
                src={getThumbnail(item.thumbnail)}
                alt={`${item.name}`}
              />
              <div className="merchDescription">
                <p className="merchName">{item.name}</p>
              </div>
              <div className="buttons">
                {
                  <button
                    onClick={() => props.handleYes(item.id)}
                    className="buttonYes"
                  >
                    ✔️
                  </button>
                }
                {
                  <button
                    onClick={() => props.handleNo(item.id)}
                    className="buttonNo"
                  >
                    ❌
                  </button>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
