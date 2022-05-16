import FooterCopy from "../FooterCopy";
import FooterItems from "../FooterItems";
import FooterSocial from "../FooterSocial";
import FooterTitle from "../FooterTitle";
import Newsletter from "../Newslatter";
import "./styles.scss";

const FooterDesk = () => {
  return (
    <footer className="footer__container">
      <div className="footer__comp">
        <FooterSocial />
        <div className="footer_sections">
          <FooterTitle text={"Institucional"} />
          <ul className="footer__list">
            <FooterItems text={"A Marca"} />
            <FooterItems text={"Lojas"} />
            <FooterItems text={"Contato"} />
          </ul>
        </div>

        <div className="footer_sections">
          <FooterTitle text={"Informações"} />
          <ul className="footer__list">
            <FooterItems text={"Formas de Pagamento"} />
            <FooterItems text={"Trocas e Devoluções "} />
            <FooterItems text={"Cuidados Com o Produto"} />
          </ul>
        </div>

        <div className="footer_sections">
          <FooterTitle text={"Conheça"} />
          <ul className="footer__list">
            <FooterItems text={"Franquias e Multimarcas"} />
            <FooterItems text={"Trabalhe com a Gente"} />
            <FooterItems text={"Procon-RJ"} />
          </ul>
        </div>
        <Newsletter />
      </div>
      <FooterCopy />
    </footer>
  );
};

export default FooterDesk;
