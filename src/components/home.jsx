import React, {Component} from 'react';

class Home extends Component {

    render() {

        return (
            <div className="homeContainer container">
                <h3 className="homeHeader">Carl Markegång</h3>
                <img src="/img/carl_markegang.png" className="homeMeImage" alt="Carl Markegång"/>
                <p className="homeIntroduction">Hej!<p>Se mitt <a href="cv.pdf" target="_blank">CV</a></p></p>
				
                <span className="projectButtonLink"><div className="projectButton" link='/project'
                                                         onMouseMove={this.props.onMouseMove}
                                                         onMouseDown={this.props.onMouseDown}>Projekt och Erfarenheter</div>
                    </span>
            </div>
        );

    }

};

export default Home;