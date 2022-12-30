export function MerchGrid(props) {
  return (
    <div className="centered">
      <div className="cardsAll">
        {props.merchItems.map((item) => (
          <div className="card">
            <div className="cardContent">
              <img
                className="thumbnail"
                src={item.thumbnail}
                alt={`${item.name}`}
              />
              <div>
                <p className="merchName">{item.name}</p>
              </div>
              <div className="buttons">
                <button className="buttonYes">✔️</button>
                <button className="buttonNo">❌</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
