import logo_header from "../../assets/logo/logo-header.svg";
import logo_footer from "../../assets/logo/logo-footer.svg";
import "./styles.scss";

export const LogoHeader = () => {
  return (
    <div className="logo__header">
      <img src={logo_header} alt="Original.io" />
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
