import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { useProduct } from "./providers/context";

export const AppRoutes = () => {
  const { product } = useProduct();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={`/product/:productId/:productName`}
          element={<Product />}
        />
      </Routes>
    </BrowserRouter>
  );
};
