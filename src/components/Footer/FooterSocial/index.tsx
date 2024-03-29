import "./styles.scss";
import facebook from "../../../assets/icons/facebook.svg";
import instagram from "../../../assets/icons/instagram.svg";
import pinterest from "../../../assets/icons/pinterest.svg";
import vtex from "../../../assets/icons/vtex.svg";
import ebit from "../../../assets/icons/ebit.svg";

const FooterSocial = () => {
  return (
    <div className="footer__social">
      <div className="social">
        <div>
          <img src={facebook} alt="facebook" />
        </div>
        <div>
          <img src={instagram} alt="instagram" />
        </div>
        <div>
          <img src={pinterest} alt="pinterest" />
        </div>
      </div>
      <div className="seal">
        <div>
          <img src={vtex} alt="vtex" />
        </div>
        <div>
          <img src={ebit} alt="ebit" />
        </div>
      </div>
    </div>
  );
};

export default FooterSocial;
