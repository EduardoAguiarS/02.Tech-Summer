import FooterCopy from "../FooterCopy";
import FooterSocial from "../FooterSocial";
import FooterTitle from "../FooterTitle";
import Newsletter from "../Newslatter";
import "./styles.scss";

export function FooterMobile() {
  return (
    <footer className="mfooter_container">
      <FooterTitle text={"Institucional"} />
      <FooterTitle text={"informações"} />
      <FooterTitle text={"conheça"} />
      <div className="footer__comp">
        <FooterSocial />
        <Newsletter />
      </div>
      <FooterCopy />
    </footer>
  );
}
