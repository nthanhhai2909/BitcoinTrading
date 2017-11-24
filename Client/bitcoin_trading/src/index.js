import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Logup from './components/Logup';
import Profile from './components/Profile';
class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/profile/:username' component={Profile} />
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/logup' component={Logup}/>

                </Switch>
            </Router>
        );
    };
}

ReactDOM.render(<App/>, document.getElementById('root'))