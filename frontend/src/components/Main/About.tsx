import classes from './About.module.scss'
import styles from "../../scss/utils/_helpers.module.scss"


const About = () => {
  return (
    <section className={classes['section-about']}>
      <div className={classes['section-about-img']}>
        <img src="/team.png" alt="Illustration of a team"/>
      </div>
        <div className={classes["section-about__text-area"]}>

        <h3 className={styles["heading-tertiary"]}>About us</h3>
        <h2 className={styles["heading-secondary"]}>Who we are</h2>
        <p className={classes["text-content"]}>Holvada is a leading digital solutions provider, specializing in web development and innovative graphic design. We are dedicated to turning your ideas into captivating and functional online experiences. With a team of experienced professionals, we bring together the best of design and technology to create powerful web solutions that drive business growth.</p>
        </div>
    </section>
    )
}

export default About