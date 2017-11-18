import React from 'react';
import {browserHistory} from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Navbar, NavItem, MenuItem, Header, Brand, Nav, Col, Image, circle} from 'react-bootstrap';
export default class Header1 extends React.Component{

    constructor(props, context) {
        super(props, context);
        //do something...
    }

    handleClick(){
        this.props.handleClick();
    }

    render(){
        return(
            <Router>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a to="#">BLOCKCHANIN</a>
                        </Navbar.Brand>
                        <Nav>
                            <NavItem onClick={()=>this.handleClick()}><Link to={'/login'}>Login</Link></NavItem>
                        </Nav>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem to="about">About</NavItem>
                    </Nav>
            </Navbar>
            </Router>
            
        );
    }
}   