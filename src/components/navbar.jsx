import React, {Component} from 'react';

class NavBar extends Component {

    render() {
        return (
            <div>
                <nav>
                    <span>Logo</span>
                    <span className="link navLinkBlue" link='' onMouseMove={this.props.onMouseMove} onMouseDown={this.props.onMouseDown}>Home</span>
                    <span className="link navLinkRed" link='project'  onMouseMove={this.props.onMouseMove} onMouseDown={this.props.onMouseDown}>Project</span>
                    <span className="link navLinkGreen" link='contact' onMouseMove={this.props.onMouseMove} onMouseDown={this.props.onMouseDown}>Contact</span>
                </nav>
            </div>
        );
    }

};

export default NavBar;