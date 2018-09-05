import React, {Component} from 'react';
import NavBar from './components/navbar';
import Home from './components/home';
import Project from './components/project';
import Contact from './components/contact';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar/>

                <BrowserRouter>
                    <Route exact path="/" render={(props) => {
                        return (
                            <div>
                                <Home/>
                            </div>
                        )
                    }}/>
                </BrowserRouter>

                <BrowserRouter>
                    <Switch>
                        <Route exact path='/project' component={Project}/>
                        <Route exact path='/contact' component={Contact}/>
                    </Switch>
                </BrowserRouter>

            </React.Fragment>
        );
    }
}

export default App;