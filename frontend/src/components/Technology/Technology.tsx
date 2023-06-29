import React from 'react'
import Header from '../Header/Header'
import TechHero from './TechHero'
import { secondaryAnimationStart } from '../../utils/animation'

const Technology = () => {
  const navItems=["Home", "Web", "Mobile", "Graphics"]
  const navLinks=["section-home", "section-web", "section-mobile", "section-graphics"]
  
  return (
    <Header navItems={navItems} navLinks={navLinks} navHeading='Tech' HeroElement={TechHero} animationStart={secondaryAnimationStart} otherClasses=''/>
  )
}

export default Technology