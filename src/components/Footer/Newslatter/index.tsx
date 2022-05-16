import Button from "../../Buttons";
import "./styles.scss";

const Newsletter = () => {
  return (
    <aside className="newsletter">
      <h3>Assine nossa news</h3>
      <div className="news__form">
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" />
        <div className="email">
          <div className="email__input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <Button
            text={"Enviar"}
            color={"white"}
            bgColor={"#DE8F75"}
            size={"btn__small"}
            full={false}
          />
        </div>
      </div>
    </aside>
  );
};

export default Newsletter;
