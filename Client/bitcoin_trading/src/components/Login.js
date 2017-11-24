import React from 'react';
import Header from './Header';
import {  Link } from 'react-router-dom';
import '../css/style.css';
import axios from 'axios';
import{ Router, Redirect} from 'react-router';

export default class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
            status: "",
            isLogin: false,
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }


    resetForm(){
        this.setState({
            username: "",
            password: "",
            status: "",
        });
    }

    loginClick(){
        axios.post('http://localhost:3000/login',{
            username: this.state.username, 
            password: this.state.password
        })
        .then((response)=>{
            if(response.data.status === 'true'){
                this.props.history.push({
                    pathname:"/profile/:user=" + this.state.username,
                    state:{isLogin: true}
                });
            }
            else{
                this.setState({status: "Login unsuccessful!!!"})
            }
            
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
                          <h5>{this.state.status}</h5>
                        <h3>Username:</h3>
                        <input type="text" placeholder="Username" onChange={ e =>this.handleChangeUsername(e)}/><br/>
                        <h3>Password:</h3>
                        <input type="password" placeholder="Password" onChange={e => this.handleChangePassword(e)}/>
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