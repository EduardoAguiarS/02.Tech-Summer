import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Hero";
import PageTitle from "../components/PageTitle";
import ProductDesk from "../components/Product/ProductDesk";
import { SliderOther } from "../components/Product/Slides";
import "./product.scss";

interface ProductProps {}

export const Product: React.FC<ProductProps> = () => {
  return (
    <div>
      <Header />
      <div className="product__container">
        <ProductDesk />
        <PageTitle title={"Quem viu, viu tambem"} />
        <SliderOther />
      </div>
      <Footer />
    </div>
  );
};
