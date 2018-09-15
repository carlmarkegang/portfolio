import React, {Component} from 'react';
import Linas from './portfolioBlocks/linas';
import Pizzeria from './portfolioBlocks/pizzeria';
import Tetris from './portfolioBlocks/tetris';
import PrevPortfolio from './portfolioBlocks/prevportfolio';

class ProjectContainer extends Component {
    render() {

        return (
            <React.Fragment>
                <table>
                    <Linas/>
                    <div className="portfolioBlockSeperator"></div>
                    <Pizzeria />
                    <div className="portfolioBlockSeperator"></div>
                    <Tetris />
                    <div className="portfolioBlockSeperator"></div>
                    <PrevPortfolio />
                </table>
            </React.Fragment>
        );

    }

};

export default ProjectContainer;