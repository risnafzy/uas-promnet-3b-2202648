import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/download.jpeg';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">
                                <img src={logo} alt="Logo" width="250" height="110" className="d-inline-block align-text-top" />
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
