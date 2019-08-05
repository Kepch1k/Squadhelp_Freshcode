import React,{ useState , useEffect } from 'react';
import style from './carousel.module.scss';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import {LOADING_ITEMS} from '../../../constants/consts';
let number = 0;
function Carousel (){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return(
    <div className={style.carousel}>
      <div className={style.content}>
        <div className={style.navTabs}>
          <div className={style.newTabsButton} id={"navTabsSelect"}>
            Names
          </div>
          <div className={style.newTabsButton}>
            Taglines & Slogans
          </div>
          <div className={style.newTabsButton}>
            Logo Design
          </div>
        </div>
        <div className={style.carouselN1}>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
        <div className={style.moreName}>
          <Link to="/ss"><div className={style.exploreButton}>
            Explore Names For Sale
          </div></Link>
        </div>
      </div>
    </div>
  )
}
export default Carousel;
