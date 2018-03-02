import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Component/Home/home'
import Add from './Component/add/add'
import Read from './Component/read/read'
import Headerstatic from './Component/header'

export default class App extends Component{

    render(){
        return(
            <Router>
                <div>
                    <Headerstatic />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/add' component={Add} />
                <Route path='/read' component={Read} />
                <Route render={()=>{
                    return(
                        <h1>Page not found</h1>
                    )
                }} />

            </Switch>
            </div>
        </Router>
        )
    }
}