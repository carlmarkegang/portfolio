import React, {Component} from 'react';

class NavBar extends Component {

    render() {
        return (
            <div>
                <nav>
                    <span>Logo</span>
                    <a href="/"><span>Home</span></a>
                    <a href="/project"><span>Project</span></a>
                    <a href="/contact"><span>Contact</span></a>
                </nav>
            </div>
        );
    }

};

export default NavBar;