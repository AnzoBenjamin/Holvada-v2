import React, { useEffect, useRef } from "react";
import classes from './HeroSlider.module.scss'

interface SlideProps {
  imageURL: string;
  mainText: string;
  subText: string;
}

interface HeroSliderProps{
    slideData: {imageURL: string, mainText: string, subText: string}[];
}

const Slide: React.FC<SlideProps> = ({ imageURL, mainText, subText }) => {
  return (
    <div className={classes.slide}>
      <div
        className={classes["slide__background"]}
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
      <div className={classes["slide__content"]}>
        <h1 className={classes["slide__main-text"]}>{mainText}</h1>
        <p className={classes["slide__subtext"]}>{subText}</p>
      </div>
    </div>
  );
};

const HeroSlider: React.FC<HeroSliderProps> = ({slideData}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const slides: NodeListOf<HTMLElement> | undefined = slider?.querySelectorAll('.slide')
    let currentSlide = 0;

    const showSlide = (slideIndex: number)=>{
        slides?.forEach((slide, index)=>{
            if(index == slideIndex) slide.classList.add('active')
            else slide.classList.remove('active')
        })
    }

    const nextSlide = () => {
        if(slides){
            currentSlide = (currentSlide + 1) % slides.length
        }
        showSlide(currentSlide)
    }

    const intervalID = setInterval(nextSlide, 7000)

    return () => {clearInterval(intervalID)};
  }, []);

  return <div ref={sliderRef} className={classes["hero-slider"]}>
    {slideData.map((slide, index) => <Slide key={index} imageURL={slide.imageURL} mainText={slide.mainText} subText={slide.subText}/>)}
  </div>;
};

export default HeroSlider;
