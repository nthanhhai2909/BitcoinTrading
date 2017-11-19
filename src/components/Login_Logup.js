import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Logup from './Logup';
import Header from './Header';

class Login_Logup extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header/>
                <Login/>
            </div>
            
        );
    };
}
