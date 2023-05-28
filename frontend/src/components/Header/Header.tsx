import { useRef, useState, useEffect } from 'react'
import Navigation from './Navigation'
import Hero from './Hero'
import classes from './Header.module.scss'
const Header = () => {
  const headerRef = useRef(null)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(()=>{
    const headerElement = headerRef.current
    const observer = new IntersectionObserver(([entry])=>{
      setIsHeaderVisible(!entry.isIntersecting);
    })

    if(headerElement){
      observer.observe(headerElement)
    }

    return () => {
      if(headerElement){
        observer.unobserve(headerElement)
      }
    }
  }, [isHeaderVisible])

  return (
    <header ref={headerRef} className={classes.header}>
      <Navigation isFixed={isHeaderVisible}/>
      <Hero/>
    </header>
  )
}

export default Header