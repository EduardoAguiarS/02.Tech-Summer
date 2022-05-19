import logo_header from "../../assets/logo/logo-header.svg";
import logo_footer from "../../assets/logo/logo-footer.svg";
import "./styles.scss";
import { Link } from "react-router-dom";

export const LogoHeader = () => {
  return (
    <div className="logo__header">
      <Link to="/">
        <img src={logo_header} alt="Original.io" />
      </Link>
    </div>
  );
};

export const LogoFooter = () => {
  return (
    <div className="logo__footer">
      <img src={logo_footer} alt="Original.io" />
    </div>
  );
};
