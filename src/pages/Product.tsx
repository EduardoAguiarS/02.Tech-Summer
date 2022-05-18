import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Hero";
import ProductDesk from "../components/Product/ProductDesk";
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
