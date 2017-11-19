import React from 'react';
import Header from './Header';
import {Navbar, NavItem, MenuItem, Brand, Nav, Col, Image, circle, Form, 
    Input, FormGroup, Button, FormControl, Checkbox, Label} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../css/style.css';
import Login from './Login';
import axios from 'axios';
 
export default class Logup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fullname: null,
            username: null,
            password:null,
            confirm:null,
        }

        this.handleChangeFullName = this.handleChangeFullName.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeConfirm = this.handleChangeConfirm.bind(this);
    }

    handleChangeFullName(event){
        this.setState({fullname: event.target.value});
    }
    handleChangeUsername(event){
        this.setState({username: event.target.value});
    }
    handleChangePassword(event){
        this.setState({password: event.target.value});
    }
    handleChangeConfirm(event){
        this.setState({confirm:event.target.value});
    }

    SignupClick(){
        axios.post('/logup',{
            fullname:this.state.fullname,
            username: this.state.username, 
            password: this.state.password,
            confirm:this.state.confirm
        })
        .then((response)=>{
            console.log(response.data);
        })
        .catch((err) => console.log(err));
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
                        <h3>Full name:</h3>
                        <input type="text" placeholder="Full Name" value={this.state.fullname}
                            onChange={this.handleChangeFullName}/><br/>
                         <h3>Username:</h3>
                        <input type="text" placeholder="Username" value={this.state.username}
                            onChange={this.handleChangeUsername}/><br/>
                        <h3>Password:</h3>
                        <input type="password" placeholder="Password" value={this.state.password}
                            onChange={this.handleChangePassword}/><br/>
                        <h3>Confirm:</h3>
                        <input type="password" placeholder="Confirm" value={this.state.confirm}
                            onChange={this.handleChangeConfirm}/><br/>
                        <input type="button" value="Sign-up" className="login-button" onClick={()=>this.SignupClick()}/>
                    </div>
                </div>
                
            </div>
            
            
        );
    }
}