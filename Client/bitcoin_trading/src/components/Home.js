import React from 'react';
import {browserHistory} from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Transaction from './Transaction'
import '../css/style.css';
import axios from 'axios';
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            transaction: []
        }
    }

    componentDidMount(){
        axios.get('https://tradingbitcoin.herokuapp.com/transaction')
        .then((response) =>{
            this.setState({
                transaction: response.data.data
            });
        })
        .catch((err) => console.log(err));
    }


    render(){

        return(
            <div>
                <Header/>
                <div className="container">
                    <h1>Blocks Recent</h1>
                    <div className="content_home_page">
                        <div>
                            {
                                this.state.transaction.map((element, index) => <Transaction transaction={element}/>)
                            }
                        </div>
                    </div>
                    <div style={{marginTop:50}}>
                        <h1>All transactions: {this.state.transaction.length + 1}</h1>
                    </div>
                    
                </div>
            </div>
        );
    }
}