import React, {Component} from 'react';
import ProjectBlocks from './portfolio/projectblocks';

class Project extends Component {

    render() {

        return (
            <div className='container'>
                <h3>Projekt och Erfarenheter</h3>
                <ProjectBlocks />
            </div>
        );

    }

};

export default Project;