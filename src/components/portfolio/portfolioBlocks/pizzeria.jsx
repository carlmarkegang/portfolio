import React, {Component} from 'react';

class Pizzeria extends Component {
    render() {

        return (
            <React.Fragment>
                <tr className="portfolioBlock">
                    <td className="portfolioBlockImage">
                        <img src='/img/icon2.png'/>
                    </td>
                    <td className="portfolioBlockText">
                        <h3>Gridtorps Pizzeria</h3>
                        <p>En restaurangsida skapad för Grindtorps pizzeria med adminverktyg med fokus på användarvänlighet.</p>
                        <p><a href='#'>Läs mer</a></p>
                        <div className="portfolioBlockTechs">
                            <span style={{backgroundColor: '#004eff'}}>PHP</span>
                            <span style={{backgroundColor: '#c000ff'}}>JavaScript</span>
                        </div>
                    </td>
                </tr>
            </React.Fragment>
        );

    }

};

export default Pizzeria;