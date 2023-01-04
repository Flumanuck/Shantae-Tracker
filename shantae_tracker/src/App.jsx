import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import "./App.css";
import { merchItems } from "./db/merchItems";
import { MerchGrid } from "./components/MerchGrid";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <MerchGrid merchItems={merchItems}></MerchGrid>
      </BrowserRouter>
    </div>
  );
}

export default App;
