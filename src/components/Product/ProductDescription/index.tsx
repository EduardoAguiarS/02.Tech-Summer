import { useProduct } from "../../../providers/context";
import "./styles.scss";

const ProductDescription = () => {
  const { product } = useProduct();

  return (
    <div className="description">
      <span className="title">Descrição</span>
      <p className="desc">
        {product?.description ||
          "Descriçao sobre o produto , sobre suas qualidades e detalhes do produto."}
      </p>
    </div>
  );
};

export default ProductDescription;
