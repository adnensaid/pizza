import React, { Component } from 'react';
import Style from './details.module.scss';
export default class Details extends Component{
  render(){
    return(
      <section className={ Style.details }>
        <div className="container">
          <ul className={ Style.listDetails+" d-flex flex-row justify-content-between" }>
            <li className={ Style.elemDetails }>
              <p className={ Style.titleDetails }>| new format</p>
              <p className={ Style.textDetails }>
                Lorem ipsum dolor sit amet, consecte
                sectetur adipisicing elit, tation omne 
                ullamco laboris nisi ut aliqolore.    
              </p>
            </li>
            <li className={ Style.elemDetails }>
              <p className={ Style.titleDetails }>|| master classes</p>
              <p className={ Style.textDetails }>
                Lorem ipsum dolor sit amet, consecte
                sectetur adipisicing elit, tation omne 
                ullamco laboris nisi ut aliqolore.    
              </p>
            </li>
            <li className={ Style.elemDetails }>
              <p className={ Style.titleDetails }>||| pizza restaurant</p>
              <p className={ Style.textDetails }>
                Lorem ipsum dolor sit amet, consecte
                sectetur adipisicing elit, tation omne 
                ullamco laboris nisi ut aliqolore.    
              </p>
            </li>    
          </ul>
        </div>
      </section>
    )
  }
}