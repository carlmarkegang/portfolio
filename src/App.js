import React, {Component} from 'react';
import NavBar from './components/navbar';
import Home from './components/home';
import Project from './components/project';
import Contact from './components/contact';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

class App extends Component {


    state = { x: 0, y: 0 };
    cursorPosition = {
        left: 0,
        top: 0
    };

    allowMovement = 1;


    onMouseMove(e) {
        if(this.allowMovement === 1){
            this.cursorPosition = {
                left: e.nativeEvent.clientX,
                top: e.nativeEvent.clientY
            };

            this.setState({ x: e.nativeEvent.clientX, y: e.nativeEvent.clientY });
        }
    }

    onMouseDown(e) {
        this.allowMovement = 0;
        this.cursorPosition = {
            left: '-1000px',
            top: '-1000px',
            width:'5000px',
            height:'5000px',
            transition: '1.5s'
        };

        this.setState({ x: e.nativeEvent.clientX, y: e.nativeEvent.clientY });
    }


    render() {
        const { x, y } = this.state;

        return (
            <div onMouseMove={this.onMouseMove.bind(this)} onMouseDown={this.onMouseDown.bind(this)}>
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
                <h1 style={this.cursorPosition} className="cursorFollower"></h1>

            </div>
        );
    }
}

export default App;