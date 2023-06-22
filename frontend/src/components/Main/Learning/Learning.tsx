import React from 'react'
import Header from '../../Header/Header'
import LearnHero from './LearnHero'

const Learning = () => {
  const navItems=["Home","Music", "Code", "Chess", "Art"]
  const navLinks=["section-home", "section-music", "section-code", "section-chess", "section-art"]
  return (
    <Header navItems={navItems} navLinks={navLinks} navHeading='Learn' HeroElement={LearnHero} otherClasses={classes.hero}/>
  )
}

export default Learning