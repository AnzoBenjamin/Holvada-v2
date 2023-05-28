import classes from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer__link-container"]}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Pricing</a>
      </div>
      <div className={classes["footer__text-content"]}>
        <h2 className={classes["footer__header"]}>Holvada</h2>
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
        <p className={classes["footer-copyright"]}>Copyright &copy; 2023</p>
      </div>
      <div className={classes["footer__contact-info"]}>
        <h3>Contact Us</h3>
        <p>+256780827089</p>
        <p>holvadaa@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
