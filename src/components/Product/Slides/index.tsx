import { useEffect, useState } from "react";
import { useProduct } from "../../../providers/context";
import chevronUp from "../../../assets/icons/chevron-up.svg";
import chevronDown from "../../../assets/icons/chevron-down.svg";
import chevronLeft from "../../../assets/icons/chevron-left.svg";
import chevronRight from "../../../assets/icons/chevron-right.svg";

import "./styles.scss";
import { Link } from "react-router-dom";

export const SliderProduct = () => {
  const { product } = useProduct();
  const [image, setImage] = useState<string | undefined>(
    product?.items[0].images[0].imageUrl
  );

  useEffect(() => {
    setImage(product?.items[0].images[0].imageUrl);
  }, [product]);

  return (
    <section className="container__slider">
      <div className="thumbs">
        <div className="up">
          <button>
            <img src={chevronUp} alt="Cima" />
          </button>
        </div>

        <div className="thumb__img">
          {product?.items[0].images.map(image => (
            <img
              src={image.imageUrl}
              alt={image.imageText}
              onClick={() => {
                setImage(image.imageUrl);
              }}
              key={image.imageId}
            />
          ))}
        </div>

        <div className="down">
          <button>
            <img src={chevronDown} alt="Baixo" />
          </button>
        </div>
      </div>

      <div className="hero__img">
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export const SliderOther = () => {
  const { products, setProduct } = useProduct();

  return (
    <div className="slider__o">
      <div className="slider__imgs">
        <div>
          {products.map(product => (
            <div>
              <img
                src={product.items[0].images[0].imageUrl}
                alt={product.items[0].images[0].imageText}
              />
              <Link to={`/product/${product.productId}/${product.productName}`}>
                <button onClick={() => setProduct(product)}>Comprar</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="slider__nav">
        <div className="button">
          <img src={chevronLeft} alt="" />
        </div>
        <span>1 de 3</span>
        <div className="button">
          <img src={chevronRight} alt="" />
        </div>
      </div>
    </div>
  );
};
