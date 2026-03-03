import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductDetail } from "./pages/ProductDetail";
import { Home } from "./pages/Home";
import { Layout } from "./component/Layout";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./component/Wishlist";
import { SearchPage } from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/category/:name" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
