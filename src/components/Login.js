import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Redirect} from 'react-router';
import {Navbar, NavItem, MenuItem, Brand, Nav, Col, Image, circle, Form, 
    Input, FormGroup, Button, FormControl, Checkbox, Label} from 'react-bootstrap';
import '../css/style.css';
import axios from 'axios';


export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username: null,
            password: null,
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }


    loginClick(){
        axios.post('/login',{
            username: this.state.username, 
            password: this.state.password
        })
        .then((response)=>{
            this.props.history.push("/");
        })
        .catch((err) => console.log(err));
    }

    handleChangeUsername(event){
        this.setState({username: event.target.value});
    }

    handleChangePassword(event){

        this.setState({password: event.target.value});
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="login">
                    <div className="login-header">
                        <h1>Login</h1>
                    </div>
                    <div className="login-form">
                        <h3>Username:</h3>
                        <input type="text" placeholder="Username"
                         value={this.state.username} onChange={this.handleChangeUsername}/><br/>
                        <h3>Password:</h3>
                        <input type="password" placeholder="Password"
                        value={this.state.password} onChange={this.handleChangePassword}/>
                        <br/>
                        <input type="button" value="Login" className="login-button"
                             onClick={()=>this.loginClick()}/>
                        <br/>
                        <Link className="Sign-up" to="/logup">Sign-up</Link>
                        <br/>
                        <h6 className="no-access">Can't access your account?</h6>
                    </div>
                </div>
            </div>
        );
    }
}