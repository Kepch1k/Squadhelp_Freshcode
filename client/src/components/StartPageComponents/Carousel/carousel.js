import React,{ useState , useEffect } from 'react';
import style from './carousel.module.scss';
import { Link } from 'react-router-dom';
import {LOADING_ITEMS} from '../../../constants/consts';
let number = 0;
function Carousel (){
  const [text, setText] = useState(null);
  useEffect(() => {
    const timeout = setInterval(() => {
      if (number===(LOADING_ITEMS.length)){number=0;
        setText(LOADING_ITEMS[number]);
        number++;
      }else{
        setText(LOADING_ITEMS[number]);
        number++;
      }

    },3000);
    return () => clearInterval(timeout);
  });
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
