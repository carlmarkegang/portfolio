import React, {Component} from 'react';
import Linas from './portfolioBlocks/linas';
import Pizzeria from './portfolioBlocks/pizzeria';
import Tetris from './portfolioBlocks/tetris';
import Portfolio from './portfolioBlocks/portfolio';
import Hemag from './portfolioBlocks/hemag';

class ProjectContainer extends Component {
    render() {

        return (
            <React.Fragment>
                <table>
                    <tbody>
                        <Linas/>
                        <Pizzeria />
                        <Tetris />
                        <Portfolio />
                        <Hemag />
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