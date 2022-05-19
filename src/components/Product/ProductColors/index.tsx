import { useState } from "react";
import { useProduct } from "../../../providers/context";

import "./styles.scss";

function radioColor(color: string) {
  let sColor = "";
  if (color === "Preto") {
    sColor = "#000000";
  } else if (color === "Branco") {
    sColor = "#eeeeee";
  } else if (color === "Amarelo") {
    sColor = "#fff019";
  }
  return sColor;
}

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
          <input
            className="radio__input"
            key={index}
            type="radio"
            name="color"
            value={value.name}
            // defaultChecked={index == 0 ? true : false}
            onClick={() => setColor(value.name)}
          />
          <span
            className={`radio__style`}
            style={{
              background: `${radioColor(value.name)}`,
              border: "2px solid white",
              boxShadow: `0 0 0 2px ${
                value.name === color ? radioColor(value.name) : "transparent"
              }`
            }}
          ></span>
        </label>
      ))}
    </div>
  );
};
