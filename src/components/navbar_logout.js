import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'


class Navbar_login extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light texte-dark justify-content-between sticky-top shadow-sm">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>
                        </ul>
                    </div>
                    <a className="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25" href="#"><img src={logo} alt="logo" /></a>
                    <div className="navbar-collapse collapse dual-nav w-50 order-2">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link" href=""></a></li>
    
                            <li className="nav-item"> <a className="nav-link" href=""></a></li>

                        </ul>
                    </div>

                </div>
            </nav>
        );
        }
};


export default Navbar_login;