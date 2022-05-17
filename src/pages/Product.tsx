import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Hero";
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Product/Breadcrumb";
import ProductDescription from "../components/Product/ProductDescription";
import ProductTitle from "../components/Product/ProductTitle";
import { SliderOther, SliderProduct } from "../components/Product/Slides";
import "./product.scss";

interface ProductProps {}

export const Product: React.FC<ProductProps> = () => {
  return (
    <div>
      <Header />
      <div className="product__container">
        <Breadcrumb />
        <ProductTitle />
        <ProductDescription />
        <SliderProduct />
        <SliderOther />
        <PageTitle title={"Quem viu, viu tambem"} />
      </div>
      <Footer />
    </div>
  );
};
