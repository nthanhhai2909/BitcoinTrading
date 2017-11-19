import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Logup from './components/Logup';
import Login_Logup from './components/Login_Logup';
class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/logup' component={Logup}/>

                </Switch>
            </Router>
        );
    };
}

ReactDOM.render(<App/>, document.getElementById('root'))