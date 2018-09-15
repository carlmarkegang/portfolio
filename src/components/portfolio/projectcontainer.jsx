import React, {Component} from 'react';
import Linas from './portfolioBlocks/linas';
import Pizzeria from './portfolioBlocks/pizzeria';


class ProjectContainer extends Component {
    render() {

        return (
            <React.Fragment>
                <table>
                    <Linas/>
                    <div className="portfolioBlockSeperator"></div>
                    <Pizzeria />
                </table>
            </React.Fragment>
        );

    }

};

export default ProjectContainer;