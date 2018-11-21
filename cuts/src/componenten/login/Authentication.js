import React, { Component } from 'react';
import firebase from './firebaseConfig';
import withFirebaseAuth from "react-auth-firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {
  Page,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListInput,
  ListButton,
  BlockFooter,
  Button, Link
} from 'framework7-react';
import { Grid, Image, Divider, Checkbox, Icon } from 'semantic-ui-react';
import './login.css';



class Authentication extends Component {



  render() {

    const {
      signInWithEmail,
      signUpWithEmail,
      signInWithGoogle,
      signInWithFacebook,
      signInWithGithub,
      signInWithTwitter,
      googleAccessToken,
      facebookAccessToken,
      githubAccessToken,
      twitterAccessToken,
      twitterSecret,
      signOut,
      user,
      error
    } = this.props;



    // const { email, password } = this.state;

    return (
      <div className="App">
        < div className="loginContainer">
          <Image circular src={require('../../cuts.JPG')} size="small" centered />
          <div style={{ marginTop: "30px" }}>
            <Grid centered>
              <Grid.Column width={16}  >
                <Divider />
              </Grid.Column>
              <Grid.Column width={16} >
                <Button color="black" outline icon="facebook" iconSize='17px' onClick={signInWithFacebook} >
                  Signin with Facebook
                    </Button>
              </Grid.Column>
              <Grid.Column mobile={16} >
                <Button color="black" outline iconSize='17px' onClick={signInWithGoogle} >
                  <Icon className="gg" name="google" />
                  Signin with Google
                    </Button>
              </Grid.Column>
              <Grid.Column mobile={8} >
                <Divider horizontal>OR</Divider></Grid.Column>
              <Grid.Column mobile={16} >
                <Button fill color="black">
                  Login with Email
                    </Button>
              </Grid.Column>
              <Grid.Column mobile={16} >
                <Checkbox label="I agree to the Terms and Conditions" />

              </Grid.Column>
              <Grid.Column width={16} >
                <Divider />
              </Grid.Column>
              <div style={{ textAlign: 'center', position: 'fixed', bottom: 0, padding: '20px' }}>Don't have a account? <Link href='/register/' >Register.</Link></div>
            </Grid>
          </div>
        </div>

      </div>
    );
  }
  signIn() {
    const self = this;
    const app = self.$f7;
    const router = self.$f7router;
    app.dialog.alert(`Username: ${self.state.username}<br>Password: ${self.state.password}`, () => {
      router.back();
    });
  }
}

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

export default withFirebaseAuth(Authentication, firebase, authConfig);;
