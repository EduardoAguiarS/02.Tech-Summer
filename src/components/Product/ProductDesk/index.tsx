import Button from "../../Buttons";
import { ProductColors } from "../ProductColors";
import ProductDescription from "../ProductDescription";
import ProductPrice from "../ProductPrice";
import ProductSize from "../ProductSize";
import ProductTitle from "../ProductTitle";
import { SliderProduct } from "../Slides";
import "./styles.scss";

const ProductDesk = () => {
  return (
    <section className="container__desk">
      <SliderProduct />
      <div className="info__container">
        <ProductTitle />

        <ProductPrice />

        <ProductColors />

        <ProductSize />

        <Button
          text={"Adicionar à sacola"}
          color={"white"}
          bgColor={"#32917B"}
          size={"btn__large"}
          full={true}
        />

        <ProductDescription />
      </div>
    </section>
  );
};

export default ProductDesk;
