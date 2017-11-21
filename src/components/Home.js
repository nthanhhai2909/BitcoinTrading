import React from 'react';
import {browserHistory} from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Navbar, NavItem, MenuItem, Brand, Nav, Col, Image, circle, Label, Button} from 'react-bootstrap';
import Header from './Header';
import '../css/style.css';
export default class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div>
                <Header/>>
                <h1>hihi</h1>
            </div>
        );
    }
}