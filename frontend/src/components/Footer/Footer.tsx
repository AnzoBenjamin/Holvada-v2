import classes from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h1 className={classes["footer-header"]}>2023</h1>
      <div className={classes["footer-bottom"]}>
        <p>Copyright &copy;  All rights reserved</p>
      <div className={classes["footer--icon-area"]}>
        <img src="/gmail.webp" alt="" className={classes.icon}/>
        <img src="/twitter.webp" alt="Twitter" className={classes.icon} />
        <img src="/whatsapp.webp" alt="Whatsapp" className={classes.icon} />
        <img src="/facebook.webp" alt="Facebook" className={classes.icon} />
        <img src="/instagram.webp" alt="Instagram" className={classes.icon} />
      </div>
      </div>
    </footer>
  );
};

export default Footer;
