import React, {Component} from 'react';

class NavBar extends Component {

    render() {
        return (
            <div>
                <nav>
                    <span className="link navLinkGrey" link='/' onMouseMove={this.props.onMouseMove}
                          onMouseDown={this.props.onMouseDown}>Hem</span>
                    <span className="link navLinkGrey" link='/project' onMouseMove={this.props.onMouseMove}
                          onMouseDown={this.props.onMouseDown}>Project och erfarenheter</span>
                    <span className="link navLinkGrey" link='/contact' onMouseMove={this.props.onMouseMove}
                          onMouseDown={this.props.onMouseDown}>Kontakt</span>
                </nav>
            </div>
        );
    }

};

export default NavBar;