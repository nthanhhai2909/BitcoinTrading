import React from 'react';
import '../css/style.css';

export default class Transaction extends React.Component{

    render(){
        let date = new Date(Number(this.props.transaction.date));
        console.log(date);
        return(
            <div>
                <h5>User sent: {this.props.transaction.username_sent}</h5>
                <h5>User receive: {this.props.transaction.username_receive}</h5>
                <h5>Amount: {this.props.transaction.transaction_amount}</h5>
                <h5>Date: {date.toString()}</h5> 
                <h5>Description: {this.props.transaction.description}</h5>
                <hr/>
            </div>
        );
    };
}