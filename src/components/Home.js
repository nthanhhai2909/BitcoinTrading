import React from 'react';
import {browserHistory} from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Navbar, NavItem, MenuItem, Brand, Nav, Col, Image, circle, Label, Button} from 'react-bootstrap';
import Header from './Header';
import '../css/style.css';
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            invalidIDWaller:null,
            invalidDeposits: null,
            name:null,
            balance: 0,
            transaction: [],
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="row content">
                        <div className="col-sm-4">
                            <div className="content_transaction">
                                <div className="login-form">
                                    <h3>name	&#09;: {this.state.name}</h3>
                                    <h3>Balance	&#09;: {this.state.balance}</h3>
                                    <h3>Last transaction</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8" >
                            <div className="content_home">
                                <div className="login-form">
                                    <h3>Currency: Bitcoin</h3><br/>
                                    <h3>To</h3>
                                    <input type="text" placeholder="idWallet"/>
                                    <h5>{this.state.invalidIDWaller}</h5>
                                    <br/>
                                    <h3>Amount Deposits</h3>
                                    <input type="text" placeholder="example: 0.001 "/>
                                    <h5>{this.state.invalidDeposits}</h5>
                                    <br/>
                                    <h3>Description</h3>
                                    <input type="text" placeholder="Write something"/>
                                    <br/>
                                    <Button bsStyle="primary">SENT</Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}