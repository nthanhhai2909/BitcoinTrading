import React from 'react';
import Transaction from './Transaction';
import '../css/style.css';

export default class ListTransaction extends React.Component{
    render(){
        console.log("list", this.props.values);
        return(
            <div>
                {
                    this.props.values.map((element, index) => <Transaction transaction={element}/>)
                }
            </div>
        );
    }
}