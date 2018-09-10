import React, {Component} from 'react';
import NavBar from './components/navbar';
import Home from './components/home';
import Project from './components/project';
import Contact from './components/contact';
import {BrowserRouter, Route, Link, Switch, Router} from 'react-router-dom';
import history from './history';

class App extends Component {

    state = {x: 0, y: 0};
    cursorPosition = {left: 0, top: 0};
    allowMovement = 1;
    allowTransition = 1;

    onMouseMove = (e) => {
        if (this.allowMovement === 1) {
            const backgroundStyle = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
            this.cursorPosition = {
                left: e.nativeEvent.clientX,
                top: e.nativeEvent.clientY - 25,
                backgroundColor: backgroundStyle
            };

            this.setState({x: e.nativeEvent.clientX, y: e.nativeEvent.clientY});

        }
    };

    onMouseDown = (e) => {
        if (this.allowTransition === 1 ) {
            this.onMouseMove(e);
            this.allowTransition = 0;
            this.allowMovement = 0;
            const newLink = e.target.getAttribute('link');
            const backgroundStyle = window.getComputedStyle(e.target, null).getPropertyValue("background-color");

            this.cursorPosition = {
                left: '-2000px',
                top: '-2000px',
                width: '10000px',
                height: '10000px',
                transition: '2s',
                backgroundColor: backgroundStyle
            };
            this.setState({x: e.nativeEvent.clientX, y: e.nativeEvent.clientY});
            this.timer = setTimeout(this.loadContent.bind(backgroundStyle, newLink), 1000);

        }
    };

    loadContent = (newLink) => {
        this.cursorPosition = {
            left: '0px',
            top: '0px',
            width: '5000px',
            height: '0px',
            transition: '2.5s',
            borderRadius: '0'
        };

        history.push(newLink);
        this.setState(history);
        this.timer = setTimeout(this.resetAllowMovement.bind(), 1000);

    };

    resetAllowMovement = () => {
        this.cursorPosition = {
            left: '0px',
            top: '0px',
            width: '0px',
            height: '0px',
            transition: '0s',
            borderRadius: '100%'
        };
        this.allowMovement = 1;
        this.allowTransition = 1;
        this.setState(this.cursorPosition)
    };

    render() {

        return (
            <div>
                <NavBar onMouseMove={this.onMouseMove.bind(this)} onMouseDown={this.onMouseDown.bind(this)}/>


                <Router history={history}>
                    <div>
                        <Route exact path="/" render={(props) => {
                            return (
                                <div>
                                    <Home onMouseMove={this.onMouseMove.bind(this)}
                                          onMouseDown={this.onMouseDown.bind(this)}/>
                                </div>
                            )
                        }}/>

                        <Route exact path="/project" render={(props) => {
                            return (
                                <div>
                                    <Project onMouseMove={this.onMouseMove.bind(this)}
                                             onMouseDown={this.onMouseDown.bind(this)}/>
                                </div>
                            )
                        }}/>

                        <Route exact path="/contact" render={(props) => {
                            return (
                                <div>
                                    <Contact onMouseMove={this.onMouseMove.bind(this)}
                                             onMouseDown={this.onMouseDown.bind(this)}/>
                                </div>
                            )
                        }}/>
                    </div>
                </Router>


                <div style={this.cursorPosition} className="cursorFollower"></div>

            </div>
        );
    }
}

export default App;