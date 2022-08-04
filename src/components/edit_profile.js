import React from 'react';
import { myFirebase, auth } from "../firebase/firebase";
import './../estilos/profile.css';

class Edit_profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: '',
      username: '',
      password: ''
    }
  }
  componentDidMount() {
    let currentComponent = this;
    myFirebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        currentComponent.setState({
          user: myFirebase.auth().currentUser
        });
        //console.log(user);
      } else {
        // No user is signed in.
        console.log("não tem user");
      }
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    console.log('funciono');
    e.preventDefault();
    const { user, email, username, password } = this.state;

    if (user) {

      if (username != ''){
      // User is signed in.
      user.updateProfile({
        displayName: username,
        photoURL: `https://api.adorable.io/avatars/208/${username}.png`
      }).then(function () {
        console.log('utilizador atualizado com sucesso')
      }).catch(function (error) {
        console.log("error2");
      });
    }
      user.updateEmail(email).then(function () {
        console.log("sucesso");
      }).catch(function (error) {
        console.log (error);
      });
      window.location.reload();
    } else {
      // No user is signed in.
      console.log("Sem utilizador")
    }
  }
  
  render() {
    const { user } = this.state;
    console.log(user);
    //var user = myFirebase.auth().currentUser;
    if (user != null) {

      return (
        <div className="container topoooo">
          <h1>Editar Perfil</h1>
          <hr className="linha" />
          <div className="row">

            <div className="col-md-3">
              <div className="text-center">
                <img src={user.photoURL} className="avatar img-circle" alt="avatar" />
              </div>
            </div>


            <div className="col-md-9 personal-info">

              <form onSubmit={this.handleSubmit} className="form-horizontal form" role="form">

                <div className="form-group">
                  <label className="col-lg-3 control-label">Username</label>
                  <div className="col-lg-8 col-md-8 col-sm-6">
                    <input name="username" className="form-control input" type="text" placeholder={user.displayName} onChange={this.handleChange} />
                  </div>
                </div>


                <div className="form-group">
                  <label className="col-lg-3 control-label">Email</label>
                  <div className="col-lg-8 col-md-8 col-sm-6">
                    <input name="email" className="form-control input" type="email" placeholder={user.email} onChange={this.handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-8">
                    <input type="submit" className="butao" value="Salvar" />
                    <span></span>
                    <input type="reset" className="btn btn-default" value="Cancelar" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h4>Faz <i>Log in</i> para poderes aceder a esta página.</h4>
        </div>
      )
    }

  }
}

export default Edit_profile;