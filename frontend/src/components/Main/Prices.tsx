import classes from "./Prices.module.scss";
import styles from "../../scss/utils/_helpers.module.scss";
import Card from "../../UI/Card";

const Prices = () => {
  return (
    <section className={classes["section-prices"]}>
      <h3 className={styles["heading-tertiary"]}>Prices</h3>
      <h2 className={styles["heading-secondary"]}>What we offer</h2>
      <div className={classes["card-area"]}>
        <Card className={classes.starter}>
          <header className={classes["plan-header"]}>
            <p className={classes["plan-name"]}>Development</p>
            <p className={classes["plan-price"]}>
              <span>Shs</span>500
            </p>
            <p className={classes["plan-text"]}>the minimum per project.</p>
          </header>
          <ul className={classes.list}>
            <li className={classes["list-item"]}>
              <span>UI/UX design </span>
            </li>
            <li className={classes["list-item"]}>
              <span>Deployment</span>
            </li>
            <li className={classes["list-item"]}>
              <span>Hosting</span>
            </li>
            <li className={classes["list-item"]}></li>
          </ul>
        </Card>
        <Card className={classes.complete}>
          <header className={classes["plan-header"]}>
            <p className={classes["plan-name"]}>Skilling</p>
            <p className={classes["plan-price"]}>
              <span>Shs</span>50
            </p>
            <p className={classes["plan-text"]}>per hourly session.</p>
          </header>
          <ul className={classes.list}>
            <li className={classes["list-item"]}>
              <span>
                Learning equipment <strong>provided</strong> if needed
              </span>
            </li>
            <li className={classes["list-item"]}>
              <span>
                Available <strong>7 days a week</strong>
              </span>
            </li>
            <li className={classes["list-item"]}>
              <span>Physical and online options available</span>
            </li>
            <li className={classes["list-item"]}>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
        </Card>
        <Card className={classes.starter}>
          <header className={classes["plan-header"]}>
            <p className={classes["plan-name"]}>Graphics design</p>
            <p className={classes["plan-price"]}>
              <span>Shs</span>60
            </p>
            <p className={classes["plan-text"]}>per project.</p>
          </header>
          <ul className={classes.list}>
            <li className={classes["list-item"]}>
              <span>Logos</span>
            </li>
            <li className={classes["list-item"]}>
              <span>Posters and fliers</span>
            </li>
            <li className={classes["list-item"]}>
              <span>UI/UX</span>
            </li>
            <li className={classes["list-item"]}></li>
          </ul>
        </Card>
        <p className={classes.note}>Kindly note: the prices are in the thousands (Shs 60 is 60000)</p>
      </div>
    </section>
  );
};

export default Prices;
