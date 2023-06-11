import React from 'react'
import classes from "./Cta.module.scss"
import styles from "../../scss/utils/_helpers.module.scss"
import Button from '../../UI/Button'

const Cta = () => {
    const buttonHandler = ()=> {

    }
  return (
    <section className={classes["section-cta"]}>
        <div className={classes["cta-card"]}>
            <h3>Sign up for free</h3>
            <h2>Start an exciting journey</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, eaque.</p>
            <Button text='Join us' className='' onClick={buttonHandler}/>
        </div>
    </section>
  )
}

export default Cta