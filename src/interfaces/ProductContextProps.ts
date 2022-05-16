import { ProductProps } from "./ProductProps";

export interface ProductContextProps {
  product: ProductProps | undefined;
  products: ProductProps[];
  setProduct: any;
  selectedSKU: object;
  setSelectedSKU: (sku: object) => void;
}
