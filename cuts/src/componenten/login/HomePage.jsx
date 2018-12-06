import React, { Component } from 'react';
import firebase from './firebaseConfig';
import withFirebaseAuth from "react-auth-firebase";
import { Icon } from 'antd/lib';
import { Toast } from 'antd-mobile/lib';

import {
  Page,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListInput,
  BlockFooter,
  Link
} from 'framework7-react';
import { Grid, Image, Divider, Button, Checkbox } from 'semantic-ui-react';
import './login.css';




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
      image: require('../../assets/cuts-resizes/cuts-128_x_128.png'),
      imagetiny: require('../../assets/cuts-resizes/cuts-64_x_64.png')
    };
  }

  componentDidMount() {
    this.setState({ IsSignOut: false })
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user === null) {
        Toast.success('Logged Out', 1);

      } else {
        Toast.success('Logged In', 1);
        this.setState({ current: false })
        this.$f7.view.main.router.navigate('/userbarberpage/');
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
      (this.state.current ? (
        <div className="App">
          < div className="loginContainer">
            <Image circular src={this.state.image} alt='cuts' centered />
            <div style={{ marginTop: "30px" }}>
              <Grid centered>
                <Grid.Column width={16}  >
                  <Divider />
                </Grid.Column>
                <Grid.Row>
                  <Grid.Column mobile={6} >
                    <Button color='facebook' >
                      <Icon type='facebook' style={{ fontSize: '17px' }} onClick={signInWithFacebook} />
                    </Button>
                  </Grid.Column>
                  <Grid.Column mobile={6}>
                    <Button color='google plus' >
                      <Icon type='google' style={{ fontSize: '17px' }} onClick={signInWithGoogle} />
                    </Button>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Column mobile={8} >
                  <Divider horizontal>OR</Divider></Grid.Column>
                <Grid.Column mobile={16} >
                  <Button fill="true" color="black" onClick={() => { this.setState({ loginScreenOpened: true }) }}  >
                    Login with Email
                  </Button>
                </Grid.Column>
                <Divider />
                <Grid.Column mobile={16} >
                  {/* {this.state.IsSignOut ? (
                    <Button fill="true" color="black" onClick={this.SignOut.bind(this)}>
                      SignOut
                    </Button>
                  ) : ""} */}
                  <Button fill="true" color="black" onClick={this.SignOut.bind(this)}>
                    SignOut
                    </Button>
                  <Divider />
                  <Grid.Column>
                    <Checkbox label="I agree to the Terms and Conditions" />
                  </Grid.Column>
                </Grid.Column>
                <Grid.Column width={16} >
                </Grid.Column>
                <div style={{ textAlign: 'center', position: 'fixed', bottom: 0 }}>
                  <BlockFooter >
                    {`Don't have a account? `}
                    <Link loginScreenOpen=".register-screen" > Register now.</Link>
                  </BlockFooter>
                </div>
              </Grid>
            </div>
          </div>
          {/* /*

                        Register Screen

          */}
          <LoginScreen className="register-screen" opened={this.state.registerScreenOpened} onLoginScreenClosed={() => { this.setState({ registerScreenOpened: false }) }}>
            <Page loginScreen>
              <LoginScreenTitle>Register</LoginScreenTitle>
              <div style={{ padding: '20px' }}>
                <List form>
                  <ListInput
                    label="Username"
                    type="text"
                    placeholder="Your username"
                    value={this.state.R_username} onInput={(e) => {
                      this.setState({ R_username: e.target.value });
                    }}
                  />
                  <ListInput
                    label="Password"
                    type="password"
                    placeholder="**********"
                    value={this.state.R_password}
                    onInput={(e) => {
                      this.setState({ R_password: e.target.value });
                    }}
                  />
                  <ListInput
                    label="Confirm Password"
                    type="password"
                    placeholder="**********"
                    value={this.state.confirmpassword}
                    onInput={(e) => {
                      this.setState({ R_confirmpassword: e.target.value });
                    }}
                  />
                </List>
                <List>
                  <Button fluid color="black" outline="true" onClick={this.registrationSuccess.bind(this)}>
                    Sign In</Button>
                  <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
                </List>
                <div style={{ padding: '10px' }}>
                  <Image circular src={this.state.imagetiny} alt='cuts' centered />
                </div>
              </div>
            </Page>
            <div style={{ textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
              <BlockFooter >
                <span>All Rights Reserved © Cuts</span>
              </BlockFooter>
            </div>
          </LoginScreen>
          {/* /*

                        Login Screen

          */}
          <LoginScreen className="login-screen" opened={this.state.loginScreenOpened} onLoginScreenClosed={() => { this.setState({ loginScreenOpened: false }) }}>
            <Page loginScreen>
              <LoginScreenTitle>Login</LoginScreenTitle>
              <div style={{ padding: '20px' }}>
                <List form>
                  <ListInput
                    label="Username"
                    type="text"
                    placeholder="Your username"
                    value={this.state.username} onInput={(e) => {
                      this.setState({ username: e.target.value });
                    }}
                  />
                  <ListInput
                    label="Password"
                    type="password"
                    placeholder="**********"
                    value={this.state.password}
                    onInput={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                </List>
                <List>
                  <Button fluid basic color="black" outline="true" onClick={this.signIn.bind(this)}>
                    Sign In</Button>
                  <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
                </List>
                <div style={{ padding: '20px' }}>
                  <Image circular src={this.state.imagetiny} alt='cuts' centered />
                </div>
              </div>
            </Page>
            <div style={{ textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
              <BlockFooter>
                <span>All Rights Reserved © Cuts</span>
              </BlockFooter>
            </div>
          </LoginScreen>
        </div>
      ) : "")
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
