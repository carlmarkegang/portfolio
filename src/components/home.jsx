import React, {Component} from 'react';

class Home extends Component {

    render() {

        return (
            <div className="homeContainer">
                <h3 onMouseMove={this.props.onMouseMove} onMouseDown={this.props.onMouseDown}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
                <p>Integer efficitur, ante a ullamcorper cursus, lacus tellus tempor turpis, rhoncus fringilla turpis diam a est.
                    Sed tristique sem tortor, ut posuere lorem vehicula vel. Maecenas laoreet bibendum varius. Morbi maximus rhoncus purus vel congue.
                    Etiam eu leo condimentum, vestibulum ante a, varius turpis. Sed lectus orci, pretium vitae lectus at, volutpat porta lectus.
                    Nulla facilisi. Suspendisse a arcu erat. Donec nec finibus sapien, ac sagittis enim. Sed rhoncus justo vitae ligula mattis accumsan.
                    Donec arcu lectus, interdum ut congue mattis, tempor nec quam. Proin lacus nisi, facilisis finibus est ac, viverra accumsan eros.</p>
                    <span className="projectButtonLink"><div className="projectButton" link='/project' onMouseMove={this.props.onMouseMove} onMouseDown={this.props.onMouseDown}>Projects</div>
                    </span>
            </div>
        );

    }

};

export default Home;