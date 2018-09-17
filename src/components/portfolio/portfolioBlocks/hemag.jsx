import React, {Component} from 'react';

class Hemag extends Component {
    render() {

        return (
            <React.Fragment>
                <tr className="portfolioBlock">
                    <td className="portfolioBlockImage">
                        <img src="/img/icon5.png" alt="hemag"/>
                    </td>
                    <td className="portfolioBlockText">
                        <h3 className="portfolioBlockTextHeader">Svenska Hemag</h3>
                        <h4 className="portfolioBlockTextSubHeader">Slutprojekt </h4>
                        <p>Som slutprojekt och grupparbete på utbildningen Diplomerad Webbmaster gjorde vi en sida till en hantverkarfirma</p>
                        <div className="portfolioBlockTechs">
                            <span style={{backgroundColor: '#a05434'}}>Joomla</span>
                        </div>
                    </td>
                </tr>
            </React.Fragment>
        );

    }

};

export default Hemag;