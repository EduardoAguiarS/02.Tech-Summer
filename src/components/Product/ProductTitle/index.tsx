import { useProduct } from "../../../providers/context";
import "./styles.scss";

const ProductTitle = () => {
  const { product } = useProduct();

  return (
    <header className="product__title">
      <h1>{product?.productName}</h1>
      <span>{product?.productReference}</span>
    </header>
  );
};

export default ProductTitle;
