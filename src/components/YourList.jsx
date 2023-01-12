import { merchItems } from "../db/merchItems";
import { RemoveFooter } from "../components/RemoveFooter";
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
    <div className="centered">
      <div
        className="list-container
    centered"
      >
        <div className="one-list border">
          <h2 className="list-header what-you-have"> What you have</h2>
          <div className="list">
            <ul className="products">
              {getItemsFromId(props.ownedItems).map((ownedItem) => {
                return (
                  <li key={ownedItem.id}>
                    {ownedItem.name}&nbsp;&nbsp;&nbsp;
                    <button
                      onClick={() => props.handleRemove(ownedItem.id, "owned")}
                      className="remove"
                    >
                      ❌
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="">
          <h2 className="list-header what-you-need"> What you still need </h2>
          <div className="list">
            <ul className="products">
              {getItemsFromId(props.neededItems).map((neededItem) => {
                return (
                  <li key={neededItem.id}>
                    {neededItem.name}&nbsp;&nbsp;&nbsp;
                    <button
                      onClick={() =>
                        props.handleRemove(neededItem.id, "needed")
                      }
                      className="remove"
                    >
                      ❌
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="remove-container">
        <RemoveFooter handleRemoveAll={props.handleRemoveAll} />
      </div>
    </div>
  );
}
