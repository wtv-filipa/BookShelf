import React from 'react';
//import firebase from '../../firebase.js'
import { myFirebase} from "../firebase/firebase";
import { Link } from 'react-router-dom';
//import './Auth.css';
import Login from './Login';
import icon from '../images/icon.png'
import './../login_signup.css';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			error: null
		}
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	
	handleSubmit = e => {
		e.preventDefault();
		const { email, username, password } = this.state;
		//console.log("  Username: " +username);

		myFirebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				var user = myFirebase.auth().currentUser;

				if (user) {
					console.log(user);
					user.updateProfile({
						displayName: username,
						photoURL: `https://api.adorable.io/avatars/208/${username}.png`				
					  }).then(function() {
						console.log("sucesso");
					  }).catch(function(error) {
						console.log("Insucesso");
					  });
					console.log(username);
				} else {
					console.log("Não está aqui nenhum user");
				}
				console.log("OK");
				this.props.history.push('/');
			})
			.catch(error => {
				this.setState({ error });
			});
	}



	render() {
		const { email, username, password, error } = this.state;
		return (
			<div className="grid align__item mb-5">

				<div className="register">
					<img className="site__logo" viewBox="77.7 214.9 274.7 412" src={icon} alt="logo"></img>
					<h2>Sign Up</h2>
					<form onSubmit={this.handleSubmit} className="form">
						<div className="form__field">
							<input type="text" name="username" id="username" placeholder="username" value={username} onChange={this.handleChange} />
						</div>
						<div className="form__field">
							<input type="email" name="email" id="exampleEmail" placeholder="exemplo@gmail.com" value={email} onChange={this.handleChange} />
						</div>

						<div className="form__field">
							<input type="password" name="password" id="examplePassword" placeholder="••••••••••••" value={password}
								onChange={this.handleChange} />
						</div>
						{error && <p className="error-message">{error.message}</p>}
						<div className="form__field">
							<input type="submit" value="Sign Up" />
						</div>

					</form>

					<p>Já tens uma conta?  <Link to="/login" >Entra</Link></p>
					<p><Link to="/esqueceu_pass" >Esqueceste-te da password?</Link></p>
				</div>

			</div>

		);
	}
}

export default SignUp;
