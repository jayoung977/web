import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/Common.scss";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setProducts(res.data.slice(0, 10));
    };
    getProducts();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          {/* params 사용  /Products/1 로 이동*/}
          <Route
            path="/products/:productId"
            element={<ProductDetailPage products={products} />}
          />
          {/* 제일 밑에 404 페이지 설정 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
