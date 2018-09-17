import React, {Component} from 'react';
import ProjectContainer from './portfolio/projectcontainer';

class Project extends Component {

    render() {

        return (
            <div className='container'>
                <h3>Projekt och Erfarenheter</h3>
                <ProjectContainer onMouseMove={this.props.onMouseMove} onMouseDown={this.props.onMouseDown} />
            </div>
        );

    }

};

export default Project;