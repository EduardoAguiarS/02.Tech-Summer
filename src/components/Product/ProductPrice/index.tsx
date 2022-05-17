import { useProduct } from "../../../providers/context";
import "./styles.scss";

const ProductPrice = () => {
  const { product } = useProduct();

  return (
    <div className="price__container">
      <div className="product__price">
        <span className="price">
          R${" "}
          {product?.priceRange.sellingPrice.highPrice
            .toFixed(2)
            .replace(".", ",")}
        </span>{" "}
        <span className="offer">
          R${" "}
          {product?.priceRange.sellingPrice.lowPrice
            .toFixed(2)
            .replace(".", ",")}
        </span>
      </div>
      <div className="portion">
        <span>
          Ou 6x de R${" "}
          {product?.priceRange.sellingPrice.lowPrice
            ?.toFixed(2)
            .replace(".", ",")}
        </span>
      </div>
    </div>
  );
};

export default ProductPrice;
