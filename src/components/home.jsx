import React, {Component} from 'react';

class Home extends Component {

    render() {

        return (
            <div className="homeContainer container">
                <h3>Carl Markegång</h3>
                <p></p>
                    <span className="projectButtonLink"><div className="projectButton" link='/project' onMouseMove={this.props.onMouseMove} onMouseDown={this.props.onMouseDown}>Projekt och Erfarenheter</div>
                    </span>
            </div>
        );

    }

};

export default Home;