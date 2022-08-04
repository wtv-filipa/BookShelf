import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Register";
import BookDetailPage from "./components/BookDetailPage";
import Edit_profile from './components/edit_profile';
import Bookshelf from './components/bookshelf';
import EsqueceuPass from './components/forget_pass';
import Sobrenos from './components/SobreNos';
import E404 from './components/E404';

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />

      <ProtectedRoute exact path="/book/:bookId" component={BookDetailPage} isAuthenticated={isAuthenticated}
        isVerifying={isVerifying} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <ProtectedRoute path="/editprofile" component={Edit_profile} isAuthenticated={isAuthenticated}
        isVerifying={isVerifying} />
      <ProtectedRoute path="/meus_livros" component={Bookshelf} isAuthenticated={isAuthenticated}
        isVerifying={isVerifying} />
      <Route path="/esqueceu_pass" component={EsqueceuPass} />
      <ProtectedRoute path="/about" component={Sobrenos} isAuthenticated={isAuthenticated}
        isVerifying={isVerifying} />
      <Route path="*" component={E404} />

    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}
export default connect(mapStateToProps)(App);
