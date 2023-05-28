import classes from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer__link-container"]}>
        <a href="">ABOUT US</a>
        <a href="">SERVICES</a>
      </div>
      <div className={classes["footer__icon-container"]}>
        <a href="#"><img src="/facebook.png" alt="" className={classes["footer-icon"]}/></a>
        <a href="#"><img src="/instagram.png" alt=""  className={classes["footer-icon"]}/></a>
        <a href="#"><img src="/twitter.png" alt=""  className={classes["footer-icon"]}/></a>
      </div>
      <div>
        <p className={classes["footer-copyright"]}>Copyright &copy;</p>
      </div>
    </footer>
  );
};

export default Footer;
