import React from 'react';
import Header from './Header';
import {  Link } from 'react-router-dom';
import '../css/style.css';
import Login from './Login';
import axios from 'axios';
 
export default class Logup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fullname: "",
            username: "",
            password:"",
            confirm:"",
            invalidUsername: "",
            invalidPassword: "",
            invalidConfirm: "",
        }

        this.handleChangeFullName = this.handleChangeFullName.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeConfirm = this.handleChangeConfirm.bind(this);
        this.isValidFrom = this.isValidFrom.bind(this);
        this.SignupClick = this.SignupClick.bind(this);
        this.resetForm = this.resetForm.bind(this);
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

    isValidFrom(){
        let count = 0;
        if(this.state.username[0] > '0' && this.state.username[0] < '9' || this.state.username.length === 0){
            count++;
            this.setState({invalidUsername: "Invalid"});
        }
        else{
            this.setState({invalidUsername: ""});
    
        }
        if(this.state.password.length < 6 || (this.state.password[0] > '0' && this.state.password[0] < '9') || 
            this.state.password.length === 0){
            count++;
            this.setState({invalidPassword: "Invalid"});
        }
        else{
            this.setState({invalidPassword: ""});
        }
        if(this.state.confirm !== this.state.password){
            count++;
            this.setState({invalidConfirm: "Invalid"});
        }
        else{
            this.setState({invalidConfirm: ""});
        }
        return count;
    }

    resetForm(){
        this.setState({
            fullname: "",
            username: "",
            password:"",
            confirm:"",
            invalidUsername: "",
            invalidPassword: "",
            invalidConfirm: "",
        });
    }


    SignupClick(){
        console.log(this.state.password);
        if(this.isValidFrom() > 0){
            return;
        }
        axios.post('https://tradingbitcoin.herokuapp.com/logup',{
            fullname:this.state.fullname,
            username: this.state.username, 
            password: this.state.password,
            confirm:this.state.confirm,
        })
        .then((response)=>{
            console.log(response.data);
            if(response.data.status === 'true'){
                this.props.history.push("/");
            }
            else{
                this.resetForm();
                this.setState({invalidUsername: response.data.message});
            }
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
                        <input type="text" placeholder="Full Name" onChange={e =>this.handleChangeFullName(e)}/>
                            <br/>
                         <h3>Username:</h3>
                        <input type="text" placeholder="Username" 
                            onChange={ e => this.handleChangeUsername(e)}/><br/>
                            <h5>{this.state.invalidUsername}</h5>
                        <h3>Password:</h3>
                        <input type="password" placeholder="Password" 
                            onChange={e => this.handleChangePassword(e)}/>
                            <h5>{this.state.invalidPassword}</h5>
                            <br/>
                        <h3>Confirm:</h3>
                        <input type="password" placeholder="Confirm"
                            onChange={e => this.handleChangeConfirm(e)}/>
                            <h5>{this.state.invalidConfirm}</h5><br/>
                        <input type="button" value="Sign-up" className="login-button" onClick={()=>this.SignupClick()}/>
                        <br/>
                        <Link className="Sign-up" to="/login">Login</Link>
                    </div>
                </div>
                
            </div>
            
            
        );
    }
}