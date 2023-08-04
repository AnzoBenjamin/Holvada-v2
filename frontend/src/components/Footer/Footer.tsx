import classes from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h1 className={classes["footer-header"]}>2023</h1>
      <div className={classes["footer-bottom"]}>
        <p>Copyright &copy; All rights reserved</p>
        <div className={classes["footer--icon-area"]}>
          <a href="holvadaa@gmail.com">
            <img src="/gmail.webp" alt="" className={classes.icon} />
          </a>
          <a href="twitter.com">
            <img src="/twitter.webp" alt="Twitter" className={classes.icon} />
          </a>
          <a href="whatsapp.com">
            <img src="/whatsapp.webp" alt="Whatsapp" className={classes.icon} />
          </a>
          <a href="facebook.com">
            <img src="/facebook.webp" alt="Facebook" className={classes.icon} />
          </a>
          <a href="instagram.com">
            <img
              src="/instagram.webp"
              alt="Instagram"
              className={classes.icon}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
