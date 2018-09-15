import React, {Component} from 'react';

class Linas extends Component {
    render() {

        return (
            <React.Fragment>
                    <tr className="portfolioBlock">
                        <td className="portfolioBlockImage">
                            <img src="/img/icon1.png" alt=""/>
                        </td>
                        <td className="portfolioBlockText">
                            <h3 className="portfolioBlockTextHeader">Linas Matkasse</h3>
                            <h4 className="portfolioBlockTextSubHeader">Anställd 2016 - nu</h4>
                            <p>Framför allt ansvarig för Linas Matkasses interna business-system.
                                Men även engagerad i frontendarbete för kundriktade sidor, teknisk support m.m.</p>

                            <p>Årets Anstäld 2017</p>
                            <div className="portfolioBlockTechs">
                                <span style={{backgroundColor: '#3970d6'}}>PHP</span>
                                <span style={{backgroundColor: '#037703'}}>Symfony</span>
                                <span style={{backgroundColor: '#020202'}}>Shell</span>
                                <span style={{backgroundColor: '#f39e02'}}>MySQL</span>
                                <span style={{backgroundColor: '#be68da'}}>JavaScript</span>
                                <span style={{backgroundColor: '#3e8392'}}>jQuery</span>
                                <span style={{backgroundColor: '#ea1414'}}>Docker</span>
                            </div>
                        </td>
                    </tr>
            </React.Fragment>
        );

    }

};

export default Linas;