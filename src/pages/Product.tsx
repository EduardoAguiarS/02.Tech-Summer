import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Hero";
import { useProduct } from "../providers/context";

interface ProductProps {}

export const Product: React.FC<ProductProps> = () => {
  const { product } = useProduct();

  return (
    <div>
      <Header />
      <h1>{product?.productName}</h1>
      <Footer />
    </div>
  );
};
