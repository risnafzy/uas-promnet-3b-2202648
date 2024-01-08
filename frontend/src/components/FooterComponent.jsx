import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logod.jpeg';

class FooterComponent extends Component {
    render() {
        return (
            <footer className="bg-dark text-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-left">
                            <span className="text-muted">
                            Transaction Dinamik-18
                            </span>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={logo} alt="Logo" width="70" height="70" />
                        </div>
                        <div className="col-md-4 text-right">
                            <span className="text-muted">
                                All Rights Reserved 2024 @Dinamik-18.net
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;
