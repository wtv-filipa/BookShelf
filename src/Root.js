//This component is going to provide our store to App. We’re also going to initialize react-router here as well. We’ll be adding the actual routes to App.
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import configureStore from "./configureStore";
import Navbar from './components/navbar';
import { myFirebase, auth, provider } from './firebase/firebase';
import Navbar_login from './components/navbar_logout'


const store = configureStore();

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = { user: null }
		this.logOutUser = this.logOutUser.bind(this);
	}
	componentDidMount() {
		auth.onAuthStateChanged(user => {
			if (user) {
				this.setState({
					user
				});
			}
		});
	}

	logOutUser = () => {
		myFirebase.auth().signOut()
			.then(window.location = "/");
	}

	render() {
		const user = myFirebase.auth().currentUser;
		if (user) {
			return (
				<Provider store={store}>
					<Router>
						<Navbar />
						<App />
					</Router>
				</Provider>
			)

		} else {
			return (
				<Provider store={store}>
					<Router>
						<Navbar_login />
						<App />
					</Router>
				</Provider>
			)
		}

	}
}

export default Root;