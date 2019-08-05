import React, { useState, useEffect } from 'react';
import style from './Processing.module.scss';

function Processing(props) {
const array = [];
for (let i=1;i<=6;i++){
  if(i===props.number){
    if(i===6){
      array.push(
        <>
          <div className={style.circleDone}>
            <div className={style.label}/>
            <div className={style.title}>
               {props.text}
            </div>
          </div>
        </>
      )
    }else{ array.push(
      <>
        <div className={style.circleDone}>
          <div className={style.label}/>
          <div className={style.title}>
            {props.text}
          </div>
        </div>
        <div className={style.tube}/>
      </>
    )}
  }else if(i===6){
    array.push(
      <>
        <div className={style.circle}/>
      </>
    )
  }else if (i<props.number){
    array.push(
      <>
      <div className={style.circleComplete}>
        <div className={style.label}><i className="fa fa-check"/></div>
      </div>
      <div className={style.tube}/>
      </>
        )
  }else if(i>props.number){
    array.push(
      <>
        <div className={style.circle}/>
        <div className={style.tube}/>
      </>
    )
  }
}

  return (
    <div className={style.progressMain}>
      {/*<div className={style.title}>
       {props.text}
      </div>*/}
      <div className={style.content}>
        <div className={style.tubeFirst}/>
        {array}
      </div>
    </div>
  );
}

export default Processing;
