import React, { Component } from 'react';
import firebase from './firebaseConfig';
import withFirebaseAuth from "react-auth-firebase";
import './login.css';
import RegisterPage from '../pages/RegisterPage';
import EmailPage from '../pages/EmailPage';
import LoginPage from '../pages/LoginPage';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import { GET_HOME } from '../../Actions/types';

class HomePage extends Component {
  componentDidMount() {
    this.props.getLogin();
    this.setState({ IsSignOut: false })
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user === null) {
      } else {
        this.setState({ current: false })
        this.$f7.router.navigate('/userbarberpage/');
      }
    })
  }

  render() {
    const {
      signInWithGoogle,
      signInWithFacebook,
      image,
      loginScreenOpened,
      registerScreenOpened,
      username,
      R_username,
      password,
      R_password, 
      imagetiny,
      R_confirmpassword
    } = this.props;

    // const { email, password } = this.state;
    return (
      <div className="App">
        <LoginPage image={image}
          signInWithFacebook={signInWithFacebook}
          signInWithGoogle={signInWithGoogle}
          loginScreenOpened={loginScreenOpened}
          IsClick={() => this.setState({ loginScreenOpened: true })}
          IsClickEm={() => this.setState({ registerScreenOpened: true })}

        />

                {/* /*
                        Login Screen
        */}
        <EmailPage loginScreenOpened={loginScreenOpened}
          username={username}
          password={password}
          signIn={this.signIn.bind(this)}
          imagetiny={imagetiny}
          Show={loginScreenOpened} />
        {/* /*
                        Register Screen

          */}
        <RegisterPage
          registerScreenOpened={registerScreenOpened}
          R_username={R_username}
          R_password={R_password}
          confirmpassword={R_confirmpassword}
          registrationSuccess={this.registrationSuccess.bind(this)}
          imagetiny={imagetiny}
          Show={registerScreenOpened}
        />   
      </div>
    );

  }

  signIn() {
    const self = this;
    const app = self.$f7;
    if (self.state === null) {
      return null;
    }
    if ((self.state.username === 'berre') && (self.state.password === 'test123')) {
      app.dialog.alert(`${self.state.username}`, 'Welcome back ', () => {
        app.loginScreen.close();
        this.setState({
          current: false
        })
        this.$f7.view.main.router.navigate('/map/');
      });
    } else {
      app.dialog.alert(`The username (${self.state.username})
             doesn't exists in or system, Did you already registered?`, 'Login',
        () => {
          this.setState({
            registerScreenOpened: true
          })
        })
    }
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
    if ((self.state.R_username === 'berre') && (self.state.R_password === self.state.R_confirmpassword)) {
      app.dialog.alert(`Username: ${self.state.R_username}`, 'Welcome ! ', () => {
        app.loginScreen.close();
        this.$f7.view.main.router.navigate('/map/');
      });
    }
  }
};
const authConfig = {
  email: {
    verifyOnSignup: false, // Sends verification email to user upon sign up
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
  image : state.login.image
});

const mapDispatchToProps = (dispatch) => ({
  getLogin: () => dispatch({type : GET_HOME})
})

export default connect(mapStateToProps,mapDispatchToProps)(withFirebaseAuth(HomePage, firebase, authConfig));
