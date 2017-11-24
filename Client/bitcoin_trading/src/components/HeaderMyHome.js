import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, NavItem, MenuItem, Header, Brand, Nav} from 'react-bootstrap';
export default class HeaderMyHome extends React.Component{

    constructor(props, context) {
        super(props, context);
        //do something...
    }

    handleClick(){
        this.props.logout();
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
                    </Navbar.Header>
                    <Nav pullRight>
                    <NavItem onClick={()=>this.handleClick()}><Link to={'/'}>Logout</Link></NavItem>
                        <NavItem to="about">About</NavItem>
                    </Nav>
              </Navbar> 
            </div>
             
    );
    }
}   