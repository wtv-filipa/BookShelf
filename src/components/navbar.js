import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import { logoutUser } from "../actions";
import { connect } from "react-redux";
import { myFirebase } from '../firebase/firebase';

class Navbar extends React.Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    render() {
        const user = myFirebase.auth().currentUser;
        const { isLoggingOut, logoutError } = this.props;
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

                            <li className="nav-item mr-3">
                                <Link to='/' className="nav-link">Pesquisar</Link>
                            </li>
                            <li className="nav-item mr-3">
                                <Link to='/meus_livros' className="nav-link" href="#">Favoritos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link" href="#">Sobre</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to='/' className="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25" href="#"><img src={logo} alt="logo" /></Link>
                    <div className="navbar-collapse collapse dual-nav w-50 order-2">
                        <ul className="nav navbar-nav ml-auto">
                            <div id="navbar-list-4">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src={user.photoURL} width="40" height="40" className="rounded-circle" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <Link to='/editprofile' className="dropdown-item" href="#">Perfil</Link>
                                            <a className="dropdown-item" onClick={this.handleLogout} href="">Log Out</a>
                                            {isLoggingOut && <p>Logging Out....</p>}
                                            {logoutError && <p>Error logging out</p>}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>

                </div>
            </nav>
        );
    }
};


function mapStateToProps(state) {
    return {
        logoutError: state.auth.logoutError
    };
}
export default connect(mapStateToProps)(Navbar);