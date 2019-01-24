import React, { Component } from 'react';
import firebase from './firebaseConfig';
import withFirebaseAuth from "react-auth-firebase";
import './login.css';
import RegisterPage from '../pages/RegisterPage';
import EmailPage from '../pages/EmailPage';
import LoginPage from '../pages/LoginPage';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import {getLogin,setLogin, boolEMAIL, boolRegister} from '../../Actions/login-action';



class HomePage extends Component {

  constructor(props){
    super(props);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleRegUserChange = this.handleRegUserChange.bind(this);
    this.handleRegPassChange = this.handleRegPassChange.bind(this);
  }

  handleUserChange(event) {
    this.props.login.username = event.target.value;
    this.props.setLogin(this.props.login);
  }

  handlePassChange(event) {
    this.props.login.password = event.target.value;
    this.props.setLogin(this.props.login);
  }

  handleRegUserChange(event) {
    this.props.login.rusername = event.target.value;
    this.props.setLogin(this.props.login);
  }

  handleRegPassChange(event) {
    this.props.login.rpassword = event.target.value; 
    this.props.setLogin(this.props.login); 
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user === null) {
      } else {
        this.$f7.router.navigate('/userbarberpage/');
        this.$f7.loginScreen.close();
      }
    })
  }

  render() {
    const {
      image,
      loginScreenOpened,
      registerScreenOpened,
      username,
      rusername,
      password,
      rpassword, 
      imagetiny,
      R_confirmpassword
    } = this.props.login;

    const { signInWithGoogle,
      signInWithFacebook, signInWithEmail,signUpWithEmail} =this.props;

    // const { email, password } = this.state;
    return (
      <div className="App">
        <LoginPage image={image}
          signInWithFacebook={signInWithFacebook}
          signInWithGoogle={signInWithGoogle}
          loginScreenOpened={loginScreenOpened}
          IsClick={this.props.boolEMAIL.bind(this,loginScreenOpened)}
          IsClickEm={this.props.boolRegister.bind(this,registerScreenOpened)}

        />

                {/* /*
                        Login Screen
        */}
        <EmailPage loginScreenOpened={loginScreenOpened}
          username={username}
          password={password}
          signIn={() => {
            signInWithEmail(username,password)
            
          }}
          imagetiny={imagetiny}
          Show={loginScreenOpened}
          userHandle={this.handleUserChange}
          passHandle={this.handlePassChange} />
        {/* /*
                        Register Screen

          */}
        <RegisterPage
          registerScreenOpened={registerScreenOpened}
          rusername={rusername}
          rpassword={rpassword}
          confirmpassword={R_confirmpassword}
          registrationSuccess={() => {
            signUpWithEmail(rusername,rpassword)
            this.$f7.routes.navigate('/home/');
          }}
          imagetiny={imagetiny}
          Show={registerScreenOpened}
          userHandle={this.handleRegUserChange}
          passHandle={this.handleRegPassChange}
        /> 

      </div>
    );

  }

  
  signInFacebook() { return this.signInWithFacebook }
  signInGoogle() {
    return this.signInWithGoogle
  }

  SignOut() {
    firebase.auth().signOut();
  }


 
  registrationSuccess() {
    const self = this;
    const app = self.$f7;
    if ((self.state.rusername === 'berre') && (self.state.rpassword === self.state.R_confirmpassword)) {
      app.dialog.alert(`Username: ${self.state.rusername}`, 'Welcome ! ', () => {
        app.loginScreen.close();
        this.$f7.view.main.router.navigate('/map/');
      });
    }
  }
};
const authConfig = {
  email: {
    verifyOnSignup: true, // Sends verification email to user upon sign up
    saveUserInDatabase: true // Saves user in database at /users ref
  },
  google: {
    // redirect: true, // Opens a pop up by default
    returnAccessToken: true, // Returns an access token as googleAccessToken prop
    saveUserInDatabase: true // Saves user in database at /users ref
  },
  facebook: {
    // redirect: true, // Opens a pop up by default
    returnAccessToken: true, // Returns an access token as googleAccessToken prop
    saveUserInDatabase: true // Saves user in database at /users ref
  },
  github: {
    // redirect: true,
    returnAccessToken: true,
    saveUserInDatabase: true
  },
  twitter: {
    // redirect: true,
    returnAccessToken: true,
    returnSecret: true,
    saveUserInDatabase: true
  }
};

// HomePage.prototype = {
//   login: PropTypes.array.isRequired,
//   getLogin: PropTypes.func.isRequired
// }

const mapStateToProps = (state) => ({
  login : state.login
});



export default connect(mapStateToProps,{getLogin,boolEMAIL,setLogin,boolRegister})(withFirebaseAuth(HomePage, firebase, authConfig));
