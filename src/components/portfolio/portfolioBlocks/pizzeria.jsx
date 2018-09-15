import React, {Component} from 'react';

class Pizzeria extends Component {
    render() {

        return (
            <React.Fragment>
                <tr className="portfolioBlock">
                    <td className="portfolioBlockImage">
                        <img src='/img/icon2.png' alt=""/>
                    </td>
                    <td className="portfolioBlockText">
                        <h3 className="portfolioBlockTextHeader">Gridtorps Pizzeria</h3>
                        <h4 className="portfolioBlockTextSubHeader">Frilans - 2015</h4>
                        <p>En restaurangsida skapad för Grindtorps pizzeria med adminverktyg med fokus på användarvänlighet.</p>
                        <p><a href='#'>Läs mer</a></p>
                        <div className="portfolioBlockTechs">
                            <span style={{backgroundColor: '#3970d6'}}>PHP</span>
                            <span style={{backgroundColor: '#c000ff'}}>JavaScript</span>
                        </div>
                    </td>
                </tr>
            </React.Fragment>
        );

    }

};

export default Pizzeria;