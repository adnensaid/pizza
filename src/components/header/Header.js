import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Style from './header.module.scss';
export default class Header extends Component{
  render(){
    return(
      <header className="App-header d-flex bg-light flex-column">
        <Navbar bg="transparent" variant="transparent" className={ Style.navbar }>
          <div className="container"> 
            <Navbar.Brand href="#home" className={ Style.logo }>Pizzeria</Navbar.Brand>
            <Nav className="ms-auto" className={ Style.nav }>
              <Nav.Link href="#home" className="px-5">Menu</Nav.Link>
              <Nav.Link href="#blog" className="px-5">Blog</Nav.Link>
              <Nav.Link href="#about" className="px-5">About us</Nav.Link>
              <Nav.Link href="#contact"className="px-5">Contacts</Nav.Link>    
            </Nav>
          </div>
        </Navbar>
        <div className={ Style.banner+ " flex-fill d-flex flex-column justify-content-center" }>
            <div className={ Style.bannerContent }>
              <div className="container">
                <h1 className={ Style.title }>GRAND</h1>
                <div className={ Style.bannerText+" d-flex justify-content-between align-items-center " }>
                  <h2>OPENING</h2>
                  <Button variant="primary" className={ Style.btn }>READ MORE</Button>        
                </div>
              </div>
            </div>
        </div>
      </header>
    )
  }
}