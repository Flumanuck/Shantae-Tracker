import { merchItems } from "../db/merchItems";
function getItemsFromId(idArray) {
  let items = [];
  idArray.forEach((id) => {
    const item = merchItems.find((merchItem) => merchItem.id === id);
    items.push(item);
  });
  return items;
}

export function YourList(props) {
  return (
    <div className="list-container">
      <div>
        <h2 className="list-header"> What you have</h2>
        <div className="list">
          <ul>
            {getItemsFromId(props.ownedItems).map((ownedItem) => {
              return <li key={ownedItem.id}>{ownedItem.name}</li>;
            })}
          </ul>
        </div>
      </div>
      <div>
        <h2 className="list-header"> What you still need</h2>
        <div className="list">
          <ul>
            {getItemsFromId(props.neededItems).map((neededItem) => {
              return <li key={neededItem.id}>{neededItem.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
