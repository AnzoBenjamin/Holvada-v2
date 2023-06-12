import classes from "./Prices.module.scss";
import styles from "../../scss/utils/_helpers.module.scss";
import Card from "../../UI/Card";
import { CheckmarkCircle, CloseCircle } from "react-ionicons";

const Prices = () => {
  return (
    <section className={classes["section-prices"]} id="section-prices">
      <h3 className={styles["heading-tertiary"]}>Prices</h3>
      <h2 className={styles["heading-secondary"]}>
        Flexible Pricing Plans to Suit Your Goals
      </h2>
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
              <CheckmarkCircle color={"#90d0e3"} />
              <span>UI/UX design </span>
            </li>
            <li className={classes["list-item"]}>
              <CheckmarkCircle color={"#90d0e3"} />
              <span>Deployment</span>
            </li>
            <li className={classes["list-item"]}>
              <CloseCircle color={"#90d0e3"} />
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
              <CheckmarkCircle color={"#90d0e3"} />
              <span>
                Learning equipment <strong>provided</strong> if needed
              </span>
            </li>
            <li className={classes["list-item"]}>
              <CheckmarkCircle color={"#90d0e3"} />
              <span>
                Available <strong>7 days a week</strong>
              </span>
            </li>
            <li className={classes["list-item"]}>
              <CheckmarkCircle color={"#90d0e3"} />
              <span>Music, piano, violin, saxophone</span>
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
              <CheckmarkCircle color={"#90d0e3"} />
              <span>Logos</span>
            </li>
            <li className={classes["list-item"]}>
              <CheckmarkCircle color={"#90d0e3"} />
              <span>Posters and fliers</span>
            </li>
            <li className={classes["list-item"]}>
              <CheckmarkCircle color={"#90d0e3"} />
              <span>UI/UX</span>
            </li>
            <li className={classes["list-item"]}></li>
          </ul>
        </Card>
      </div>
      <p className={classes.note}>
        Kindly note: the prices are in the thousands (Shs 60 is 60000). All
        plans include the following
      </p>
      <div className={classes.common}>
        <div className={classes["common__area"]}>
          <div className={classes["common__area--item"]}>
            {" "}
            <h4 className={classes["common__area--heading"]}>
              {" "}
              Online collaboration
              <img src="/online.png" alt="" className={classes.icon} />{" "}
            </h4>
            <p>
              With our powerful online collaboration feature, holvada enables
              you to work together seamlessly with your team, no matter where
              you are located.
            </p>
          </div>
          <div className={classes["common__area--item"]}>
            {" "}
            <h4 className={classes["common__area--heading"]}>
              {" "}
              7 days a week availability
              <img src="/available.png" alt="" className={classes.icon} />
            </h4>
            <p>
              We're proud to offer our services seven days a week, ensuring that
              our expertise and assistance are available to you every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
