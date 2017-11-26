import React from 'react';
import {browserHistory} from 'react-router';
import {Link } from 'react-router-dom';
import HeaderMyHome from './HeaderMyHome';
import {Button} from 'react-bootstrap'
import ListTransaction from './ListTransaction';
import '../css/style.css';
import axios from 'axios';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            islogin:false,
            invalidIDWaller:"",
            invalidDeposits: "",
            invalidDescription:"",
            idWallet: "",
            idWalletTo: "",
            myId: "",
            idTransaction: "",
            name:"",
            username: "",
            balance: "",
            amountDeposits:"",
            _description: "",
            transaction: [],
            
        }

        this.handleChangeIDWalletTo = this.handleChangeIDWalletTo.bind(this);
        this.handleChangeAmountDeposits = this.handleChangeAmountDeposits.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.sentClick = this.sentClick.bind(this); 
        this.isValidFrom = this.isValidFrom.bind(this);
        this.resetFormTransaction = this.resetFormTransaction.bind(this);
        this.checkIdWallet = this.checkIdWallet.bind(this);
        this.getTransaction = this.getTransaction.bind(this);
        this.logout = this.logout.bind(this);
    }
    componentDidMount(){
        console.log(this.state.islogin);
        let username = this.props.match.params.username.split("=", 2)[1];
        this.getTransaction(username);
        try{
            if(this.props.location.state.isLogin){
                this.setState({
                    islogin:this.props.location.state.islogin,
                })
                
            }
        }
        catch(err){console.log("false")}
         // get Profile
         axios.get('https://tradingbitcoin.herokuapp.com/user/' + username)
         .then((response)=>{
             if(response.data.status === 'true'){
                 this.setState({
                     name: response.data.data[0].fullname,
                     balance: response.data.data[0].balance,
                     idWallet: response.data.data[0].idWallet,
                     username: response.data.data[0].username,
                     myId: response.data.data[0]._id,
                 });
             } 
             else{
                
             }
         })
         .catch((err) => console.log(err));
         //------------------------------------------------------------------------------  
    }

    logout(){
        axios.post('https://tradingbitcoin.herokuapp.com/logout',{
            username: this.state.username
        })
    }

    getTransaction(username){
        // get Transaction
        axios.get('https://tradingbitcoin.herokuapp.com/transaction/' + username)
        .then((response) =>{
            this.setState({
                transaction: response.data.data[0].sort((a, b) => {
                    return parseFloat(b.date) - parseFloat(a.date);
                }),
            });
        })
        .catch((err) => console.log(err));
    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        if(nextState.idWalletTo !== this.state.idWalletTo){
            this.checkIdWallet(nextState.idWalletTo);
        }

        if(nextState.islogin === false){
            this.props.history.push({
                pathname:"/login",
            });
        }
        if(nextState.username !== this.state.username){
            this.getTransaction(nextState.username);
        }
    }

    handleChangeIDWalletTo(event){
        this.setState({idWalletTo: event.target.value});
    }

    handleChangeAmountDeposits(event){
        this.setState({amountDeposits: event.target.value});
    }
    handleChangeDescription(event){
        this.setState({_description: event.target.value});
    }

    resetFormTransaction(){
        this.setState({
            invalidIDWaller:"",
            invalidDeposits: "",
            invalidDescription:"",
            idWalletTo: "",
            username_receive: "",
            amountDeposits:"",
            _description: "",
        });
    }


    checkIdWallet(idWalletTo){
         // TEST IDWallet valid
        axios.get('https://tradingbitcoin.herokuapp.com/user/wallet/' + idWalletTo)
        .then((response)=>{
            if(response.data.status === 'true'){
                if(response.data.data.length === 0){
                    if(this.state.idWalletTo.length === 0){
                        this.setState({
                            invalidIDWaller: ''
                        });
                    }
                    else{
                        this.setState({
                            invalidIDWaller: 'IDWallet invalid!!!'
                        });
                    }
                    
                }
                else{
                    if(this.state.username === response.data.data[0].username){
                        this.setState({
                            invalidIDWaller: 'IDWallet invalid!!!'
                        });
                    }
                    else{
                        this.setState({
                            invalidIDWaller:"",
                            idWalletTo: response.data.data[0].idWallet,
                            idTransaction: response.data.data[0]._id,
                            username_receive: response.data.data[0].username,
                        });
                    }
                    
                  
                }
            } 
        })
        .catch((err) => console.log(err));

    }



    isValidFrom(){
        var count = 0;
        // TEST Amount Deposits
        if(this.state.amountDeposits.length === 0){
            this.setState({invalidDeposits: "invalid!!!"});
            count++;
        }
        else{
            this.setState({invalidDeposits: ""});
        }
        let countDecimal = 0;
        for(let i = 0; i < this.state.amountDeposits.length; i++){
            if(this.state.amountDeposits[i] === '.'){
                countDecimal++;
                if(countDecimal > 1){
                    count++;
                    this.setState({invalidDeposits: "invalid!!!"});
                    break;
                }
                else{
                    this.setState({invalidDeposits: ""});
                    continue;
                }
            }
            if(this.state.amountDeposits[i] < '0' || this.state.amountDeposits[i] > '9'){
                this.setState({invalidDeposits: "invalid!!!"});
                count++;
                break;
            }
            else{
                this.setState({invalidDeposits: ""});
            }
        }

        //TEST Description
        if(this.state._description.length === 0){
            this.setState({invalidDescription: "invalid!!!"});
            count++;
        }
        else{
            this.setState({invalidDescription: ""});
        }
        return count;
    }
    sentClick(){
        if(this.isValidFrom() > 0){
            return;
        }

        if(this.state.invalidIDWaller !== "" || 
            (this.state.invalidIDWaller === ""  && this.state.idWalletTo.length === 0)){
                this.setState({
                    invalidIDWaller: "invalid!!!"
                });
            return;
        }
        let count = 0;
        

        let balance = this.state.balance;
        // Make a tranfer
        axios.put('https://tradingbitcoin.herokuapp.com/userSendMoney', {
            _id:this.state.myId,
            tranfer: this.state.amountDeposits,
        })
        .then((response) =>{
            if(response.data.status === 'true'){
                this.setState({
                    balance: response.data.balance
                })
            }
            else{
                count++;
            }
        })
        .catch((err) =>console.log(err));

        // Make receive tranfer
        axios.put('https://tradingbitcoin.herokuapp.com/userReceiveMoney', {
            _id:this.state.idTransaction,
            tranfer: this.state.amountDeposits,
        })
        .then((response) =>{
            if(response.data.status === 'true'){
            }
            else{
                count++;
            }
        })
        .catch((err) =>console.log(err));

        if(count === 0){
            let date = new Date();
            axios.post('https://tradingbitcoin.herokuapp.com/transaction',{
                username_sent: this.state.username,
                username_receive: this.state.username_receive,
                date: date.getTime().toString(),
                transaction_amount: this.state.amountDeposits,
                _description: this.state._description,
            })
            .then((response)=>{
                if(response.data.status === 'true'){
                    this.resetFormTransaction();
                    this.getTransaction(this.state.username);
                }
                else{
                    this.setState({balance:balance});
                }
            })
            .catch((err) => console.log(err));
        }
        else{
            this.setState({balance:balance});
        }
        
    }

    render(){
        return(
            <div>
                <HeaderMyHome logout={this.logout}/>
                <div className="container-fluid">
                    <div className="row content">
                        <div className="col-sm-4">
                            <div className="content_transaction">
                                <div className="login-form">
                                    <h6>Name	&#09;: {this.state.name}</h6>
                                    <h6>Balance	&#09;: {this.state.balance}</h6>
                                    <h6>ID Wallet : {this.state.idWallet}</h6>
                                    <hr/>
                                    <h5>Last transaction</h5>
                                    <hr/>
                                    <div className="transaction">
                                        <ListTransaction values={this.state.transaction}/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8" >
                            <div className="content_home">
                                <div className="login-form">
                                    <h3>Currency: Bitcoin</h3><br/>
                                    <h3>To</h3>
                                    <input type="text" placeholder="idWallet" value={this.state.idWalletTo}
                                        onChange={ e =>this.handleChangeIDWalletTo(e)}/>
                                    <h5>{this.state.invalidIDWaller}</h5>
                                    <br/>
                                    <h3>Amount Deposits</h3>
                                    <input type="text" placeholder="example: 0.001" value={this.state.amountDeposits}
                                        onChange={e => this.handleChangeAmountDeposits(e)}/>
                                    <h5>{this.state.invalidDeposits}</h5>
                                    <br/>
                                    <h3>Description</h3>
                                    <input type="text" placeholder="Write something" value={this.state._description}
                                        onChange={e => this.handleChangeDescription(e)}/>
                                        <h5>{this.state.invalidDescription}</h5>
                                    <br/>
                                    <br/>
                                    <Button bsStyle="primary" style={{width:200}} onClick={()=>this.sentClick()}>SENT</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}