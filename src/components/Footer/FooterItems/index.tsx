import "./styles.scss";

const FooterItems = ({ text }: any) => {
  return (
    <li className="footer__item">
      <a href="#">{text}</a>
    </li>
  );
};

export default FooterItems;
