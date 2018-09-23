import React, {Component} from 'react';

class Home extends Component {

    render() {

        return (
            <div className="homeContainer container">
                <h3>Carl Markegång</h3>
                <p>Lösningsorienterad person på 24 år.</p>

                <p>Just nu bosatt i Kalhäll. Några av mina intressen är natur, PC-spel och programering.</p>
                <p><a href="http://markegang.se/mitt-cv.pdf">Se mitt CV</a></p>
                <span className="projectButtonLink"><div className="projectButton" link='/project'
                                                         onMouseMove={this.props.onMouseMove}
                                                         onMouseDown={this.props.onMouseDown}>Projekt och Erfarenheter</div>
                    </span>
            </div>
        );

    }

};

export default Home;