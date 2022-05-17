import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Hero";
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Product/Breadcrumb";
import { useProduct } from "../providers/context";
import "./product.scss";

interface ProductProps {}

export const Product: React.FC<ProductProps> = () => {
  const { product } = useProduct();

  return (
    <div>
      <Header />
      <div className="product__container">
        <Breadcrumb />
        <PageTitle title={"Quem viu, viu tambem"} />
      </div>
      <Footer />
    </div>
  );
};
