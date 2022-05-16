export interface ProductContextProps {
  product: object | undefined;
  products: Array<object>;
  setProduct: object;
  selectedSKU: object;
  setSelectedSKU: (sku: object) => void;
}
