import React, { Component } from 'react';
import Style from './socials.module.scss';
import fcb from '../../asstes/images/Facebook.png';
import instagram from '../../asstes/images/Instagram.png';
import twitter from '../../asstes/images/Twitter.png';
import whatsapp from '../../asstes/images/WhatsApp.png';


export default class Socials extends Component{
  render(){
    return(
      <section className={ Style.socials }>
        <div className="container-l">
          <div className={ Style.socialsList }>
            <p className={ Style.title }>#pizzeria</p>
            <div className={ Style.socialsContent }>
              <p className={ Style.text }>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis     
              </p>
              <div className={ Style.socialMedias }>
                <p className={ Style.find }> | find us here </p>
                <div className={ Style.socialsImg }>
                  <img src={ instagram } alt="instagram" />
                  <img src={ fcb } alt="fcb" />
                  <img src={ twitter } alt="twitter" />
                  <img src={ whatsapp } alt="whatsapp" />
                </div>
                <p className={ Style.ask }> | ask as here </p>
                <span className={ Style.web }>www.#pizzeria.com</span>       
              </div>   
            </div>        
          </div>  
        </div>
      </section>
    )
  }
}