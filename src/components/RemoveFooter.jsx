export function RemoveFooter(props) {
  return (
    <button onClick={() => props.handleRemoveAll()} className="remove-all">
      Remove All
    </button>
  );
}
