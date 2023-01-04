import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { YourList } from "./components/YourList";
import "./App.css";
import { merchItems } from "./db/merchItems";
import { MerchGrid } from "./components/MerchGrid";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            index
            element={<MerchGrid merchItems={merchItems}></MerchGrid>}
          />
          <Route path="checklist" element={<YourList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
