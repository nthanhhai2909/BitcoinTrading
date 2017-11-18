import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
class App extends Component{
    constructor(props){
        super(props);

        this.handleClickHeader = this.handleClickHeader.bind(this);
        this.render = this.render.bind(this);
    }

    handleClickHeader(path){

        this.render();
    }
    render(){
        console.log('dmm');
        return(
            <Router>
                <div>
                    <Header handleClick={this.handleClickHeader}/>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-6 col-sm-offset-3'>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/login' component={Login} />
                            </Switch>
                            </div>
                        </div>
                    </div>
                </div> 
            </Router>
        );
    };
}

ReactDOM.render(<App/>, document.getElementById('root'))