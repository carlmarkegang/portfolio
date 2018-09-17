import React, {Component} from 'react';
import GenericProjectBlock from './portfolioBlocks/generic';

class ProjectContainer extends Component {
    render() {

        return (
            <React.Fragment>
                <table>
                    <tbody>
                        <GenericProjectBlock />
                    </tbody>
                </table>
                <br />
                <span className="contactButtonLink">
                    <div className="contactButton" link='/contact'
                    onMouseMove={this.props.onMouseMove}
                    onMouseDown={this.props.onMouseDown}>Kontakta mig</div>
                    </span>
                <br />
            </React.Fragment>
        );

    }

};

export default ProjectContainer;