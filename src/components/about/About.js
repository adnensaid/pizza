import React, { Component } from 'react';
import Style from './about.module.scss';

export default class About extends Component{
  render(){
    return(
      <section className={Style.about}> 
        <p className={ Style.title }>ABOUT OUR <strong>CONCEPT</strong></p>
        <p className={ Style.text }>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis     
        </p>
        <ul className={ Style.list+ " d-flex justify-content-center" }>
          <li>Pizza</li>
          <li>Modern concept</li>
          <li>Story from shef</li>
          <li>Gallery</li>
        </ul>
      </section>
    )
  }
}