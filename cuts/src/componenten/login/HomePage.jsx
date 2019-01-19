import React, { Component } from 'react';
import firebase from './firebaseConfig';
import withFirebaseAuth from "react-auth-firebase";
import './login.css';
import RegisterPage from '../pages/RegisterPage';
import EmailPage from '../pages/EmailPage';
import LoginPage from '../pages/LoginPage';




class Authentication extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginScreenOpened: false,
      registerScreenOpened: false,
      username: '',
      password: '',
      R_username: '',
      R_password: '',
      R_confirmpassword: '',
      current: true,
      IsSignOut: true,
      image: require('../../assets/logo/Cuts64_X_64W.png'),
      imagetiny: require('../../assets/logo/Cuts64_X_64W.png')
    };
  }

  componentDidMount() {
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
    } = this.props;

    // const { email, password } = this.state;
    return (
      <div className="App">
        <LoginPage image={this.state.image}
          signInWithFacebook={signInWithFacebook}
          signInWithGoogle={signInWithGoogle}
          loginScreenOpened={this.state.loginScreenOpened}
          IsClick={() => this.setState({ loginScreenOpened: true })}
          IsClickEm={() => this.setState({ registerScreenOpened: true })}

        />

                {/* /*
                        Login Screen
        */}
        <EmailPage loginScreenOpened={this.state.loginScreenOpened}
          username={this.state.username}
          password={this.state.password}
          signIn={this.signIn.bind(this)}
          imagetiny={this.state.imagetiny}
          Show={this.state.loginScreenOpened} />
        {/* /*
                        Register Screen

          */}
        <RegisterPage
          registerScreenOpened={this.state.registerScreenOpened}
          R_username={this.state.R_username}
          R_password={this.state.R_password}
          confirmpassword={this.state.R_confirmpassword}
          registrationSuccess={this.registrationSuccess.bind(this)}
          imagetiny={this.state.imagetiny}
          Show={this.state.registerScreenOpened}
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

export default withFirebaseAuth(Authentication, firebase, authConfig);
