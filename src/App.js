import React, {Component} from 'react';
import NavBar from './components/navbar';
import Home from './components/home';
import Project from './components/project';
import Contact from './components/contact';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';


class App extends Component {


    state = {x: 0, y: 0, routertest: 'home'};
    cursorPosition = {
        left: 0,
        top: 0,
    };
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
        if (this.allowTransition === 1) {

            this.allowTransition = 0;
            this.allowMovement = 0;
            const newLink = e.target.getAttribute('link');
            const backgroundStyle = window.getComputedStyle(e.target, null).getPropertyValue("background-color");

            this.cursorPosition = {
                left: '-1000px',
                top: '-1000px',
                width: '5000px',
                height: '5000px',
                transition: '1.5s',
                backgroundColor: backgroundStyle
            };
            this.setState({x: e.nativeEvent.clientX, y: e.nativeEvent.clientY});
            console.log(newLink);
            this.timer = setTimeout(this.loadContent.bind(backgroundStyle, newLink), 1500);

        }
    };

    loadContent = (newLink) => {
        console.log(newLink);
        this.cursorPosition = {
            left: '0px',
            top: '0px',
            width: '0px',
            height: '0px',
            transition: '1.5s'
        };

        this.timer = setTimeout(this.resetAllowMovement.bind(), 1500);
        window.history.pushState('page2', 'Title', '/' + newLink);
        this.state = {x: 0, y: 0, routertest: 'project'};
        this.setState(this.state);

    };

    resetAllowMovement = () => {
        this.allowMovement = 1;
        this.allowTransition = 1;
    };

    render() {

        return (
            <div>
                <NavBar onMouseMove={this.onMouseMove.bind(this)} onMouseDown={this.onMouseDown.bind(this)}/>

                <BrowserRouter>
                    <Switch routertest={this.state.routertest}>
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
                    </Switch>
                </BrowserRouter>

                <div style={this.cursorPosition} className="cursorFollower"></div>

            </div>
        );
    }
}

export default App;