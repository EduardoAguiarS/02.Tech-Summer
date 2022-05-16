import { useState } from "react";
import { LogoHeader } from "../../Logo";
import MenuItems from "../MenuItems";
import "./styles.scss";

import burger from "../../../assets/icons/burger.svg";
import cart from "../../../assets/icons/cart.svg";
import search from "../../../assets/icons/search.svg";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const active = () => setIsActive(!isActive);

  let items = 0;

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <div className="menu__burger">
            <button onClick={active}>
              <img src={burger} alt="Menu" />
            </button>
          </div>
          <LogoHeader />
          <div className="right__items">
            <button>
              <img src={search} alt="busca" />
            </button>
            <button>
              <img src={cart} alt="Carrinho de compras" />
            </button>
          </div>
        </nav>
      </header>
      <nav className={`menu__nav ${isActive ? "active" : "inactive"}`}>
        <div className="login">
          <span>
            <a href="#">Entrar | Cadastrar</a>
          </span>
        </div>
        <ul className="menu__list">
          <MenuItems link="#" text="Sapatos" />
          <MenuItems link="#" text="Bolsas" />
          <MenuItems link="#" text="Acessórios" />
          <MenuItems link="#" text="OFF" />
        </ul>
        <div className="search__cart">
          <div className="search">
            <img src={search} alt="Busca" />
            <input type="text" placeholder="Busca" />
          </div>
          <div className="cart">
            <img src={cart} alt="Carrinho de compras" />
            <span>{items}</span>
          </div>
        </div>
      </nav>
    </>
  );
}
