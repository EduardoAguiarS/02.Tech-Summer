import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Hero";
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Product/Breadcrumb";
import { ProductColors } from "../components/Product/ProductColors";
import ProductDescription from "../components/Product/ProductDescription";
import ProductDesk from "../components/Product/ProductDesk";
import ProductPrice from "../components/Product/ProductPrice";
import ProductSize from "../components/Product/ProductSize";
import ProductTitle from "../components/Product/ProductTitle";
import { SliderOther, SliderProduct } from "../components/Product/Slides";
import "./product.scss";

interface ProductProps {}

export const Product: React.FC<ProductProps> = () => {
  return (
    <div>
      <Header />
      <div className="product__container">
        {/* <Breadcrumb />
        <ProductTitle />
        <ProductDescription />
        <ProductPrice />
        <ProductSize />
        <ProductColors />
        <SliderProduct />
        <SliderOther />
        <PageTitle title={"Quem viu, viu tambem"} /> */}
        <ProductDesk />
      </div>
      <Footer />
    </div>
  );
};
