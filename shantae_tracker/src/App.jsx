import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { YourList } from "./components/YourList";
import "./App.css";
import { merchItems } from "./db/merchItems";
import { MerchGrid } from "./components/MerchGrid";
function App() {
  const [ownedItems, setOwnedItems] = useState([]);
  const [neededItems, setNeededItems] = useState([]);

  function handleYes(id) {
    if (ownedItems.includes(id)) {
      return;
    }
    if (neededItems.includes(id)) {
      const updatedNeededItems = neededItems.filter(
        (neededItem) => neededItem !== id
      );
      setNeededItems(updatedNeededItems);
    }
    setOwnedItems([...ownedItems, id]);
  }
  function handleNo(id) {
    if (neededItems.includes(id)) {
      return;
    }
    if (ownedItems.includes(id)) {
      const updatedOwnedItems = ownedItems.filter(
        (ownedItem) => ownedItem !== id
      );
      setOwnedItems(updatedOwnedItems);
    }
    setNeededItems([...neededItems, id]);
  }

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            index
            element={
              <MerchGrid
                handleYes={handleYes}
                handleNo={handleNo}
                merchItems={merchItems}
              ></MerchGrid>
            }
          />
          <Route
            path="checklist"
            element={
              <YourList ownedItems={ownedItems} neededItems={neededItems} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
