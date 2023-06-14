import classes from "./Footer.module.scss";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer__link-container"]}>
        <h3 className={classes["footer-heading-secondary"]}>Quick Links</h3>
        <div className={classes["footer__links"]}>
          <Link smooth to="header">
            Home
          </Link>
          <Link smooth to="section-about">
            About
          </Link>
          <Link smooth to="section-services">
            Services
          </Link>
          <Link smooth to="section-prices">
            Pricing
          </Link>
        </div>
      </div>
      <div className={classes["footer__text-content"]}>
        <h2 className={classes["footer__header"]}>Holvada</h2>
        <p className={classes["footer-about"]}>
          With a focus on building strong partnerships, we work closely with our
          clients to deliver innovative solutions that drive growth and enable
          digital transformation. Experience the power of holvada and let us
          help you unlock your full potential in today's digital landscape.
        </p>

        <div className={classes["footer__icon-container"]}>
          <a href="#">
            <img
              src="/facebook.webp"
              alt=""
              className={classes["footer-icon"]}
            />
          </a>
          <a href="#">
            <img
              src="/instagram.webp"
              alt=""
              className={classes["footer-icon"]}
            />
          </a>
          <a href="#">
            <img
              src="/twitter.webp"
              alt=""
              className={classes["footer-icon"]}
            />
          </a>
        </div>
      </div>
      <div className={classes["footer__contact-info"]}>
        <h3 className={classes["footer-heading-secondary"]}>Contact Us</h3>
        <div className={classes["contact-container"]}>
          <img
            src="/phone.webp"
            alt=""
            className={classes["footer-icon"]}
          />{" "}
          <p>+256780827089</p>
        </div>
        <div className={classes["contact-container"]}>
          <img src="/gmail.webp" alt="" className={classes["footer-icon"]} />
          <p>holvadaa@gmail.com</p>
        </div>
        <div className={classes["contact-container"]}>
          <img src="/whatsapp.webp" alt="" className={classes["footer-icon"]} />
          <p>+256709394069</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
