import React from 'react';
import {browserHistory} from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Navbar, NavItem, MenuItem, Brand, Nav, Col, Image, circle} from 'react-bootstrap';
import Header from './Header';
export default class Home extends React.Component{

    render(){
        return(
            <div>
                <Header/>
                <h1>home</h1>
            </div>
        );
    }
}