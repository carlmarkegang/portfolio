import React, {Component} from 'react';

class NavBar extends Component {

    render() {
        return (
            <div>
                <nav>
                    <span>Logo</span>
                    <span className="link" link=''  onMouseMove={this.props.onMouseMove} onMouseDown={this.props.onMouseDown}>Home</span>
                    <span className="link" link='project'  onMouseMove={this.props.onMouseMove} onMouseDown={this.props.onMouseDown}>Project</span>
                    <span className="link" link='contact' onMouseMove={this.props.onMouseMove} onMouseDown={this.props.onMouseDown}>Contact</span>
                </nav>
            </div>
        );
    }

};

export default NavBar;