import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { loginUser } from "../actions";
import { withStyles } from "@material-ui/styles";
import '../login_signup.css';
import Button from "@ /core/Button";
import Typography from "@material-ui/core/Typography";
import icon from '../images/icon.png'

const styles = () => ({
  errorText: {
    color: "#f50057",
    marginBottom: 5,
    textAlign: "center"
  },
  botao: {
    backgroundImage: "linear-gradient(160deg, rgb(226, 153, 160) 0%, #EB5565 100%)",
    color: "#fff",
    marginBottom: "6rem",
    width: "100%",
    borderRadius: "999px",
    textAlign: "center",
    padding: "8px",
    border: "1px solid #242c37",
    font:"inherit",
    textTransform:"none",
   
  }
});

class Login extends Component {
  state = { email: "", password: "" };

  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  };

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;

    dispatch(loginUser(email, password));
  };

  render() {
    const { classes, loginError, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="grid align__item">

          <div className="register">
            <img className="site__logo" viewBox="77.7 214.9 274.7 412" src={icon} alt="logo"></img>
            <h2>Sign In</h2>

            <form className="form">

              <div className="form__field">
                <input type="email" name="email" id="exampleEmail" placeholder="exemplo@gmail.com" onChange={this.handleEmailChange} />

              </div>

              <div className="form__field">
                <input type="password" name="password" id="examplePassword" placeholder="••••••••••••" onChange={this.handlePasswordChange} />
              </div>


              {loginError && (
                <Typography component="p" className={classes.errorText}>
                 O email ou a password estão incorretos
                </Typography>
              )}

              <div className="form__field">
                <Button
                  type="button"
                  variant="contained"
                  className={classes.botao} onClick={this.handleSubmit}>
                  Entrar
              </Button>
              </div>
            </form>
            <p>Ainda não tens uma conta? <Link to="/signup" >Regista-te</Link></p>
            <p><Link to="/esqueceu_pass" >Esqueceste-te da password?</Link></p>

          </div>

        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default withStyles(styles)(connect(mapStateToProps)(Login));