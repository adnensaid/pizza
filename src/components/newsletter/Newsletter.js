import React, { Component } from 'react';
import Style from './newsletter.module.scss';
import imgNewsletter from '../../asstes/images/pizzanew.png';
export default class Newsletter extends Component{
  render(){
    return(
      <section className={ Style.newsletter }>
        <img src={ imgNewsletter } alt='img' className={ Style.imgNewsletter } />
        <div className={ Style.newsletterContent }>
          <div className="container">
            <div className={ Style.newsletterText }>
              <div className={ Style.textVertical }>
                <p>new format</p>
              </div>
              <div className={ Style.textHorizontal }>
               <p className={ Style.titre }>What new ?</p>
               <div className={ Style.text }>
                 <p>
                 |  Sed do eiusmod tempor incididunt ut <br /> Labore et
                 </p>
                 <p> |  Dolore magna aliqua Quis </p>
                 <p> |  Quis ipsum suspendisse ultrices gravida </p>    
               </div>
              </div>
            </div>
          </div>    
        </div>
      </section>
    )
  }
}