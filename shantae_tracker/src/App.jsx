import "./App.css";
import { merchItems } from "./db/merchItems";
import { MerchGrid } from "./components/MerchGrid";
function App() {
  return <MerchGrid merchItems={merchItems}></MerchGrid>;
}

export default App;
