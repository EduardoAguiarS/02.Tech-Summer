import { useProduct } from "../providers/context";

interface ProductProps {}

export const Product: React.FC<ProductProps> = () => {
  const { product } = useProduct();

  return (
    <div>
      <h1>{product?.productName}</h1>
    </div>
  );
};
