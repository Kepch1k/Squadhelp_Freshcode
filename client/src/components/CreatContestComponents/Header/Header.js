import React,{ useState , useEffect } from 'react';
import style from './Header.module.scss';
import Processing from '../Processing/Processing';
import { Link } from 'react-router-dom';
let number = 0;
function Header (){
  return(
    <div className={style.startContestSteps}>
      <div className={style.insideStartContestSteps}>
        <div className={style.contestStepsRow}>
          <div className={style.contestStepsTip}>
            <div className={style.title}>
              START A CONTEST
            </div>
            <div className={style.content}>
              Launching a contest on Squadhelp is very simple. Select the type of contest you would like to launch from the list below.
              Provide a detailed brief and select a pricing package. Begin receiving submissions instantly!
            </div>
          </div>
          <Processing text={"1. Select Csssontest Type"} number={2}/>
        </div>
      </div>
    </div>
  )

}
export default Header;
