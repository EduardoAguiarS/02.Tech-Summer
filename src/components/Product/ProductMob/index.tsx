import { useProduct } from "../../../providers/context";
import Button from "../../Buttons";
import { ProductColors } from "../ProductColors";
import ProductDescription from "../ProductDescription";
import ProductPrice from "../ProductPrice";
import ProductSize from "../ProductSize";
import ProductTitle from "../ProductTitle";
import "./styles.scss";

const ProductMob = () => {
  const { product } = useProduct();

  return (
    <section className="mob__container">
      <ProductTitle />
      <div>
        <img
          style={{
            width: "250px",
            height: "325px",
            margin: "0 auto"
          }}
          src={product?.items[0].images[0].imageUrl}
          alt={product?.items[0].images[0].imageText}
        />
      </div>

      <ProductColors />

      <ProductSize />

      <div className="buy__container">
        <ProductPrice />
        <Button
          text={"Adicionar à sacola"}
          color={"white"}
          bgColor={"#32917B"}
          size={"btn__large"}
          full={false}
        />
      </div>
      <ProductDescription />
    </section>
  );
};

export default ProductMob;
