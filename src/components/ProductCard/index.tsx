import { Link } from "react-router-dom";
import { useProduct } from "../../providers/context";

interface ProductCardProps {}

export const ProductCard: React.FC<ProductCardProps> = () => {
  const { products, setProduct } = useProduct();

  return (
    <>
      {products.map(product => (
        <div key={product.productId}>
          <img
            src={product.items[0].images[0].imageUrl}
            alt={product.items[0].images[0].imageText}
          />
          <h3>{product.productName}</h3>
          <span>{product.description}</span>
          <div>
            <button onClick={() => setProduct(product)}>
              <Link to={`/product/${product.productId}/${product.productName}`}>
                Comprar
              </Link>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
