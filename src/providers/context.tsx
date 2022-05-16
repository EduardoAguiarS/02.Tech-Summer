import React, { createContext, useContext, useEffect, useState } from "react";
import { ProductProps } from "../interfaces/ProductProps";

interface ProductContextProps {
  product: object | undefined;
  products: Array<object>;
  setProduct: object;
  selectedSKU: object;
  setSelectedSKU: (sku: object) => void;
}

interface ProductProviderProps {
  children: React.ReactNode;
}

const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children
}) => {
  const [product, setProduct] = useState<ProductProps>();
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [selectedSKU, setSelectedSKU] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        product,
        products,
        setProduct,
        selectedSKU,
        setSelectedSKU
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
