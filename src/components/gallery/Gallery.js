import React, { Component } from 'react';
import Style from './gallery.module.scss';
import img1 from '../../asstes/images/gallery3.png';
import img2 from '../../asstes/images/gallery2.png';
import img3 from '../../asstes/images/gallery1.png';

export default class Gallery extends Component{
  render(){
    return(
      <section className={ Style.gallery }>
        <div className="container-l">
            <div className={ Style.title }>
              <p> GALLERY </p>
            </div>
        </div> 
          <div className={ Style.galleryContent }>
            <img src={ img1 } alt="img" className={ Style.img1 } />
            <div className={ Style.lastImg }>
              <img src={ img2 } alt="img" className={ Style.img2 }/>
              <img src={ img3 } alt="img" className={ Style.img3 }/>    
            </div>
          </div>    
      </section>
    )
  }
}