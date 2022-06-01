import React, { createContext, useContext, useEffect, useState } from "react";
import { ProductContextProps } from "../interfaces/ProductContextProps";
import { ProductProps } from "../interfaces/ProductProps";

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
    fetch("http://localhost:3001/products")
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
