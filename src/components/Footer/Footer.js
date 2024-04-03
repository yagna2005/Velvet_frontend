import { Link } from "react-router-dom";
import { StyledFooter } from "./Footer-styles";

function Footer() {
  return (
    <StyledFooter>
      <div className="footer__links">
        <div className="footer__column column1">
          <p className="footer__address address1">
            61/45 1st cross Street
          </p>
          <p className="footer__address address2">Coimbatore</p>
        </div>
        <div className="footer__column column2">
          <h6>Links</h6>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer__column column3">
          <h6>Help</h6>
          <Link to="/">Payment Options</Link>
          <Link to="/shop">Returns</Link>
          <Link to="/about">Privacy Policies</Link>
        </div>
        
      </div>

      <div className="footer__divider"></div>
      <p className="rights">2023 Velvet Vista. All rights reverved</p>
    </StyledFooter>
  );
}

export default Footer;
