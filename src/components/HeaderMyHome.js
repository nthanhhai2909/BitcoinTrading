import React from 'react';
import {browserHistory} from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Navbar, NavItem, MenuItem, Header, Brand, Nav, Col, Image, circle} from 'react-bootstrap';
export default class HeaderMyHome extends React.Component{

    constructor(props, context) {
        super(props, context);
        //do something...
    }

    handleClick(){
    }
    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a to="#"><Link to={'/home'}>BLOCKCHAIN</Link></a>
                    </Navbar.Brand>
                    <Nav>
                        <NavItem onClick={()=>this.handleClick()}><Link to={'/home'}>Home</Link></NavItem>
                    </Nav>
                </Navbar.Header>
                <Nav pullRight>
                <NavItem onClick={()=>this.handleClick()}><Link to={'/'}>Logout</Link></NavItem>
                    <NavItem to="about">About</NavItem>
                </Nav>
        </Navbar>  
    );
    }
}   