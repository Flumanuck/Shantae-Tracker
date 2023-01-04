export function YourList(props) {
  return (
    <div className="list-container">
      Yourlist
      <pre>{JSON.stringify(props.ownedItems)}</pre>
      <pre>{JSON.stringify(props.neededItems)}</pre>
      <div></div>
    </div>
  );
}
