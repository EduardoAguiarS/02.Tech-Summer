import { useState } from "react";
import { useProduct } from "../../../providers/context";
// import "./styles.scss";

const ProductSize = () => {
  const [size, setSize] = useState<string>("");
  const { product } = useProduct();

  return (
    <div className="size">
      <div className="size__guide">
        <div>
          <span>Tamanho: </span>
          <span className="size__value">{size}</span>
        </div>
        <a href="#">Guia de tamanhos</a>
      </div>

      {product?.skuSpecifications[1].values.map((value, index) => (
        <label className="radio__container" key={value.name}>
          {value.name}
          <input
            className="radio__input"
            type="radio"
            name="size"
            value={value.name}
            key={index}
            onClick={() => setSize(value.name)}
          />
          {/* <span
            className="radio__style"
            style={{
              background: `${sSize == number ? "#de8f75" : "white"}`,
              color: `${sSize == number ? "white" : "#5F75AA"}`
            }}
          >
            {number}
          </span> */}
        </label>
      ))}
    </div>
  );
};

export default ProductSize;
