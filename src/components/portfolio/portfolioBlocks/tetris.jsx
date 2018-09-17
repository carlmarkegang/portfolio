import React, {Component} from 'react';

class Tetris extends Component {
    render() {

        return (
            <React.Fragment>
                <tr className="portfolioBlock">
                    <td className="portfolioBlockImage">
                        <img src="/img/icon3.png" alt=""/>
                    </td>
                    <td className="portfolioBlockText">
                        <h3 className="portfolioBlockTextHeader">Tetris</h3>
                        <h4 className="portfolioBlockTextSubHeader">Projekt</h4>
                        <p>Tetris-spel skrivet i Javascript</p>
                        <p><a href="https://github.com/carlmarkegang/canvas-tetris">Spela</a></p>
                        <div className="portfolioBlockTechs">
                            <span style={{backgroundColor: '#acdf4d'}}>Canvas</span>
                            <span style={{backgroundColor: '#9062a7'}}>JavaScript</span>
                        </div>
                    </td>
                </tr>
            </React.Fragment>
        );

    }

};

export default Tetris;