import classes from "./Prices.module.scss";
import styles from "../../scss/utils/_helpers.module.scss";
import Card from "../../UI/Card";
import { CheckmarkCircle, CloseCircle } from 'react-ionicons'

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
            <CheckmarkCircle color={'#90d0e3'}/><span>UI/UX design </span>
            </li>
            <li className={classes["list-item"]}>
            <CheckmarkCircle color={'#90d0e3'}/><span>Deployment</span>
            </li>
            <li className={classes["list-item"]}>
            <CloseCircle color={'#90d0e3'}/><span>Hosting</span>
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
            <CheckmarkCircle color={'#90d0e3'}/><span>
              Learning equipment <strong>provided</strong> if needed
              </span>
            </li>
            <li className={classes["list-item"]}>
            <CheckmarkCircle color={'#90d0e3'}/><span>
              Available <strong>7 days a week</strong>
              </span>
            </li>
            <li className={classes["list-item"]}>
            <CheckmarkCircle color={'#90d0e3'}/><span>Music, piano, violin, saxophone</span>
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
            <CheckmarkCircle color={'#90d0e3'}/><span>Logos</span>
            </li>
            <li className={classes["list-item"]}>
            <CheckmarkCircle color={'#90d0e3'}/><span>Posters and fliers</span>
            </li>
            <li className={classes["list-item"]}>
            <CheckmarkCircle color={'#90d0e3'}/><span>UI/UX</span>
            </li>
            <li className={classes["list-item"]}></li>
          </ul>
        </Card>
      </div>
      <p className={classes.note}>Kindly note: the prices are in the thousands (Shs 60 is 60000)</p>
        <div className={classes.common}>
          <h4>These are included for all the above</h4>
          <div className={classes["common__area"]}>
            <div className={classes["common__area--iten"]}> <img src="/online.png" alt="" className={classes.icon}/> Online collaboration
            </div>
            <div className={classes["common__area--item"]}> <img src="/available.png" alt="" className={classes.icon}/> 7 days a week availability</div>
            <div></div>
          </div>
        </div>
    </section>
  );
};

export default Prices;
