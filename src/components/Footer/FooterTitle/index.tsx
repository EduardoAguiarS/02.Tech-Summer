import "./styles.scss";
import plus from "../../../../public/icons/plus.svg";

const FooterTitle = ({ text }: any) => {
  return (
    <aside className="aside__container">
      <div className="footer__title">
        <h4>{text}</h4>
        <div className="more">
          <img src={plus} alt="more" />
        </div>
      </div>
    </aside>
  );
};

export default FooterTitle;
