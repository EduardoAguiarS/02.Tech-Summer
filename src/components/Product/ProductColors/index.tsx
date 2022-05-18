import { useState } from "react";
import { useProduct } from "../../../providers/context";

// import "./styles.scss";

export const ProductColors = () => {
  const { product } = useProduct();
  const [color, setColor] = useState<string>("");

  return (
    <div className="color">
      <div className="color__name">
        <span>Cor:</span>
        <span className="color__value">{color}</span>
      </div>

      {product?.skuSpecifications[0].values.map((value, index) => (
        <label className="radio__container" key={value.name}>
          {value.name}
          <input
            className="radio__input"
            key={index}
            type="radio"
            name="color"
            value={value.name}
            // defaultChecked={index == 0 ? true : false}
            onClick={() => setColor(value.name)}
          />
          {/* <span
            className={`radio__style`}
            style={{
              background: `${color}`,
              border: "2px solid white",
              boxShadow: `${cor == color ? `0 0 0 2px ${color}` : "none"}`
            }}
          ></span> */}
        </label>
      ))}
    </div>
  );
};
