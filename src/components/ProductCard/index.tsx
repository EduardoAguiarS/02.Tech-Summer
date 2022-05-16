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
            <button onClick={() => setProduct(product)}>Comprar</button>
          </div>
        </div>
      ))}
    </>
  );
};
