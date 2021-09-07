import React, { Component } from 'react';
import Style from './footer.module.scss';

export default class Footer extends Component{
  render(){
    return(
      <section className={ Style.footer }>
        <div className="container">
          <div className={ Style.footerContent }>
            <div className={ Style.footerDescription }>
              <p className={ Style.footerDescriptionTitle }>ABOUT</p>
              <p className={ Style.text }>
              Lorem ipsum dolor sit amet, consec
              tetur adipisicing elit, sed do eiusmod tempor incididunt
              ultimam quantum    
              </p>
            </div>
            <ul className={ Style.footerList }>
              <li className={ Style.footerElem }>
                <p className={ Style.footerElemTitle }>MENU</p>
                <div className={ Style.footerElemList }>
                  <p>Team</p>
                  <p>join us</p>
                  <p>Ethic</p>
                  <p>Goals</p>    
                </div>
              </li>  
              <li className={ Style.footerElem }>
                <p className={ Style.footerElemTitle }>SHEF</p>
                <div className={ Style.footerElemList }>
                  <p>Team</p>
                  <p>join us</p>
                  <p>Ethic</p>
                  <p>Goals</p>    
                </div>
              </li>      
              <li className={ Style.footerElem }>
                <p className={ Style.footerElemTitle }>CONTACT</p>
                <div className={ Style.footerElemList }>
                  <p>Team</p>
                  <p>join us</p>
                  <p>Ethic</p>
                  <p>Goals</p>    
                </div>
              </li>      
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
