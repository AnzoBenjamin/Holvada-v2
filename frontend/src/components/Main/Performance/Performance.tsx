import React from 'react'
import Header from '../../Header/Header'
import PerformanceHero from './PerformanceHero'
import classes from './Performance.module.scss'

const Performance = () => {
  const navItems=["Home","Music", "Code", "Chess", "Art"]
  const navLinks=["section-home", "section-music", "section-code", "section-chess", "section-art"]

  return (
    <Header HeroElement={PerformanceHero} navHeading='Performance' navItems={navItems} navLinks={navLinks} otherClasses={classes.hero}/>
  )
}

export default Performance