import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { YourList } from "./components/YourList";
import "./App.css";
import { merchItems } from "./db/merchItems";
import { MerchGrid } from "./components/MerchGrid";
function App() {
  const [ownedItems, setOwnedItems] = useState(() => {
    let storedOwnedItems = window.localStorage.getItem("ownedItems");
    if (!storedOwnedItems) {
      return [];
    } else return JSON.parse(storedOwnedItems);
  });
  const [neededItems, setNeededItems] = useState(() => {
    let storedNeededItems = window.localStorage.getItem("neededItems");
    if (!storedNeededItems) {
      return [];
    } else return JSON.parse(storedNeededItems);
  });
  useEffect(() => {
    window.localStorage.setItem("ownedItems", JSON.stringify(ownedItems));
    window.localStorage.setItem("neededItems", JSON.stringify(neededItems));
  }, [neededItems, ownedItems]);
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
            path="merchandise"
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
          <Route path="*" element={<Navigate to="merchandise"></Navigate>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
