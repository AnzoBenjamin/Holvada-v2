import React from 'react'
import classes from './PerformanceHero.module.scss'

const PerformanceHero = () => {
  return (
    <div className={classes.hero}>
      <h2 className={classes["hero-number"]}>01</h2>
      <h1 className={classes["hero-heading"]}>SING</h1>
    </div>
  )
}

export default PerformanceHero