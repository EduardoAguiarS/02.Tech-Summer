import logo from "../../../assets/logo/logo-footer.svg";
import "./styles.scss";

const FooterCopy = () => {
  return (
    <div className="footer__footer">
      <div className="fo__container">
        <div className="fo__desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            molestie massa in nunc condimentum, vel placerat lacus pulvinar.
            Suspendisse vel nisl eu tortor feugiat tempus vel in tortor. Nunc
            semper leo nec tellus gravida faucibus.
          </p>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FooterCopy;
