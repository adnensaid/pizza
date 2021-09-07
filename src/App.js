import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Newsletter, Details, Menu, About, MasterClass, Gallery, Socials, Footer } from './components'
export default class App extends Component{
  render(){
    return(
    <div className="App">
        <Header />
        <Newsletter />
        <Details />
        <Menu />
        <About />
        <MasterClass />
        <Gallery />
        <Socials />
        <Footer />
    </div>
    )
  }
}
