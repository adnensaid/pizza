import React, { Component } from 'react';
import Style from './masterclass.module.scss';

export default class MasterClass extends Component{
  render(){
    return(
      <section className={ Style.masterClass }>
        <div className="container">
          <div className={ Style.masterClassContent }>
            <p className={ Style.title }>MASTERCLASS</p>
            <div className={ Style.text }>
              <p className={ Style.textPrimary }>
                 | THE RECIEPE FOR 
                  THE MOST 
                  DELICIOUS PIZZA DOUGHT | 
              </p>
              <p className={ Style.textSecondary }>waiting for you!</p>
              <p className={ Style.price }>
                PRICE_<strong>15€</strong>
              </p>
              <p className={ Style.heure }> 12:00-15:00 </p>
            </div>
            <p className={ Style.apply }>APPLY</p>    
          </div>
        </div>
      </section>
    )
  }
}