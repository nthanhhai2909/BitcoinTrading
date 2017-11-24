import React from 'react';

import { Link } from 'react-router-dom';
import {Navbar, NavItem, MenuItem, Header, Brand, Nav, Col, Image, circle} from 'react-bootstrap';
export default class Header1 extends React.Component{

    constructor(props, context) {
        super(props, context);
        //do something...
    }

    handleClick(){
    }
    render(){
        return(
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a to="#"><Link to={'/'}>BLOCKCHAIN</Link></a>
                        </Navbar.Brand>
                        <Nav>
                            <NavItem onClick={()=>this.handleClick()}><Link to={'/'}>Home</Link></NavItem>
                        </Nav>
                        <Nav>
                            <NavItem onClick={()=>this.handleClick()}><Link to={'/login'}>Login</Link></NavItem>
                        </Nav>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem to="about">About</NavItem>
                    </Nav>
              </Navbar>
            </div>
              
    );
    }
}   