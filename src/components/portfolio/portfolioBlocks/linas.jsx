import React, {Component} from 'react';

class Linas extends Component {
    render() {

        return (
            <React.Fragment>
                    <tr className="portfolioBlock">
                        <td className="portfolioBlockImage">
                            <img src='/img/icon1.png'/>
                        </td>
                        <td className="portfolioBlockText">
                            <h3>Linas Matkasse</h3>
                            <p>2016 - nu.</p>
                            <p>Framför allt ansvarig för Linas Matkasses interna business-system.
                                Men även engagerad i frontendarbete för kundriktade sidor, teknisk support m.m.</p>

                            <p>Årets Anstäld 2017</p>
                            <div className="portfolioBlockTechs">
                                <span style={{backgroundColor: '#004eff'}}>PHP</span>
                                <span style={{backgroundColor: '#037703'}}>Symfony</span>
                                <span style={{backgroundColor: '#020202'}}>Shell</span>
                                <span style={{backgroundColor: '#f39e02'}}>MySQL</span>
                                <span style={{backgroundColor: '#c000ff'}}>JavaScript</span>
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