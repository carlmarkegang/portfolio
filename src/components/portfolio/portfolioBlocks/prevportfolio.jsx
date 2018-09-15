import React, {Component} from 'react';

class prevPortfolio extends Component {
    render() {

        return (
            <React.Fragment>
                <tr className="portfolioBlock">
                    <td className="portfolioBlockImage">
                        <img src="/img/icon4.png" alt=""/>
                    </td>
                    <td className="portfolioBlockText">
                        <h3 className="portfolioBlockTextHeader">Markegang.se</h3>
                        <h4 className="portfolioBlockTextSubHeader">Portfolio</h4>
                        <p>Sidan du är på just nu är skriven i React med några roliga custom-skrivna transitions :) </p>
                        <p>Du kan även besöka min <a href="http://www.markegang.se/archive/">föregående portfolio-sida</a>,
                        som är skriven i Javascript och jQuery. Här finns några fler projekt jag inte har redovisat här.</p>
                        <div className="portfolioBlockTechs">
                            <span style={{backgroundColor: '#c3bf29'}}>React</span> -
                            <span style={{backgroundColor: '#3e8392'}}>jQuery</span>
                            <span style={{backgroundColor: '#c000ff'}}>JavaScript</span>
                        </div>
                    </td>
                </tr>
            </React.Fragment>
        );

    }

};

export default prevPortfolio;