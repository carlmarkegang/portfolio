import React, {Component} from 'react';

class Home extends Component {

    render() {

        return (
            <div className="homeContainer container">
                <h3 className="homeHeader">Carl Markegång</h3>
                <img src="/img/carl_markegang.png" className="homeMeImage" alt="Carl Markegång"/>
                <p className="homeIntroduction">Hej!<br />
                    Jag är 24 årig kille just nu bosatt i Kallhäll.<br />
                    Utrustad med ett livslångt intresse för teknik så är jag garanterat personen ni söker!

                </p>

                <p>Vill du veta mer? <br />
                <a href="http://markegang.se/mitt-cv.pdf">Se mitt CV</a></p>
                <span className="projectButtonLink"><div className="projectButton" link='/project'
                                                         onMouseMove={this.props.onMouseMove}
                                                         onMouseDown={this.props.onMouseDown}>Projekt och Erfarenheter</div>
                    </span>
            </div>
        );

    }

};

export default Home;