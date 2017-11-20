import React from 'react';
import {browserHistory} from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Navbar, NavItem, MenuItem, Brand, Nav, Col, Image, circle, Label} from 'react-bootstrap';
import Header from './Header';
import '../css/style.css';

export default class ListTransaction extends React.Component{

    constructor(props){
        super(props);
        state = {
            ListTransaction: this.props.listTransaction,
        }
    }

    render(){
        return(
            <div>
                {
                    this.state.listTransaction.map((element, index) => <h4>{}</h4>)
                }
            </div>
        );
    }
}