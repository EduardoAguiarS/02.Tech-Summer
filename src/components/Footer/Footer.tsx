import FooterDesk from "./FooterDesk";
import { FooterMobile } from "./FooterMobile";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <FooterMobile />
      <FooterDesk />
    </>
  );
};

export default Footer;
