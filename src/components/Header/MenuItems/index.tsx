import "./styles.scss";

const MenuItems = ({ text, link }: any) => {
  return (
    <li className="menu__item">
      <a href={link}>{text}</a>
    </li>
  );
};

export default MenuItems;
