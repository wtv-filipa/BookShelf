import React from 'react';
import { myFirebase } from "../firebase/firebase"
import { Redirect, Link } from 'react-router-dom';
import icon from '../images/icon.png'

class EsqueceuPass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            enviado: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { email } = this.state;
        var auth = myFirebase.auth();
        var emailAddress = email;
        let currentComponent = this;
        auth.sendPasswordResetEmail(emailAddress).then(function () {
            console.log("email foi enviado");
            currentComponent.setState({
                enviado: 'Email enviado com sucesso!'
            }
            );

        }).catch(function (error) {
            console.log("email não enviado " + error);
            currentComponent.setState({
                enviado: 'Email errado, tenta novamente.'
            }
            );
        });

    }


    render() {
        const { email, enviado } = this.state;
        return (
            <div className="grid align__item">

                <div className="register">
                    <img className="site__logo" viewBox="77.7 214.9 274.7 412" src={icon} alt="logo"></img>
                    <h2>Recuperação de password </h2>

                    <form onSubmit={this.handleSubmit} className="form">
                        <div className="form__field">
                            <input type="email" name="email" id="exampleEmail" placeholder="exemplo@gmail.com" value={email} onChange={this.handleChange} />
                        </div>

                        <p>{enviado}</p>
                        <div className="form__field">
                            <input onClick={this.mudar} type="submit" value="Enviar um email" />
                        </div>

                    </form>

                    <p>Já tens uma conta?  <Link to="/login" >Entra</Link></p>
                </div>

            </div>

        );
    }

}

export default EsqueceuPass;