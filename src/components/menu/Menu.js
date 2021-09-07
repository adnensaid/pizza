import React, { Component } from 'react';
import Style from './menu.module.scss';
export default class Menu extends Component{
  render(){
    return(
      <section className={ Style.menu }>
        <p className={ Style.titlePrimary }>#pizzeria</p>
        <div className={ Style.titleSecondary }>
          <p>OUR NEW MENU</p>
        </div>
        <ul className={ Style.list1 }>
          <div className={ Style.listContent }>
              <p className={ Style.textElem }>
              |  EIUSMOD SED DO <br />
              (tempor, incididunt, utas, labore, etws)
              </p>
              <p className={ Style.textElem }>
              ||  DO Dolore <br />
              (magna, aliqua, lorem) 
  
              </p>
              <p className={ Style.textElem }>
              |||  EIUSMOD SED DO <br />
              (tempor, incididunt, utas, labore, etws)
              </p>
              <p className={ Style.textElem }>
              ||  DO DOLORE <br />
              (magna, aliqua, lorem) 
              </p>
              <div className={ Style.listBottom }>
                <div className={ Style.contentListBottom }>
                  <p> ||| _ top in menu </p>
                  <p> || _ sale iteam </p>
                  <p> ||| _ made by shef </p>       
                </div> 
              </div>
              <p className={ Style.price+" "+Style.price1  }>10€</p>
              <p className={ Style.price+" "+Style.price2}>14€</p>
              <p className={ Style.price+" "+Style.price3 }>20€</p>
              <p className={ Style.price+" "+Style.price4 }>10€</p>    
          </div>
        </ul>
      </section>
    )
  }
}