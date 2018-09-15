import React, {Component} from 'react';

class Contact extends Component {

    render() {

        return (
            <div className='container'>
                <h3>Kontakt</h3>
                <div className="contact">
                    <p>carl@markegang.se</p>
                    <p>070-204 64 16</p>
                    <p>Eller ett meddelande på LinkedIn</p>
                    <p>
                        <a href="https://github.com/linasmatkasse">
                            <img src="/img/github.png" className="contactImages" alt="github" style={{width:'50px'}} /></a>
                        <a href="https://www.linkedin.com/in/carl-markeg%C3%A5ng-b41971101/"><img src="/img//linkedin.png" className="contactImages" alt="linkedin"/></a>
                    </p>
                </div>
            </div>
        );

    }

};

export default Contact;