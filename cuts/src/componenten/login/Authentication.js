import React, { Component } from 'react';
import firebase from './firebaseConfig';
import withFirebaseAuth from "react-auth-firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { Icon, Carousel } from 'antd';

import berre from 'sweetalert';
import {
    Page,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListInput,
    ListButton,
    BlockFooter,
    Link
} from 'framework7-react';
import { Grid, Image, Divider, Button, Checkbox, Segment } from 'semantic-ui-react';
import './login.css';



class Authentication extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loginScreenOpened: false,
            username: '',
            password: '',
            confirmpassword: ''
        };
    }

    componentDidMount() {
        // firebase.auth().onAuthStateChanged(user => {
        //     console.log(user);
        //     if (user === null) {
        //         berre({
        //             title: 'Afgemeld',
        //             icon: "error",
        //             button: "Ok"
        //         })
        //     } else {
        //         berre({
        //             title: 'Ingelogd',
        //             icon: "success",
        //             button: "Ok"
        //         })
        //     }
        // })
    }

    render() {

        const {
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



        const { email, password } = this.state;

        return (
            <div className="App">
                < div className="loginContainer">
                    <Image circular src={require('../../cuts.JPG')} size="small" centered />
                    <div style={{ marginTop: "30px" }}>
                        <Grid centered>
                            <Grid.Column width={16}  >
                                <Divider />
                            </Grid.Column>
                            <Grid.Row>
                                <Grid.Column mobile={6} >
                                    <Button color='facebook' >
                                        <Icon type='facebook' style={{ fontSize: '17px' }} />
                                    </Button>
                                </Grid.Column>
                                <Grid.Column mobile={6}>
                                    <Button color='google plus' >
                                        <Icon type='google' style={{ fontSize: '17px' }} />
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Column mobile={8} >
                                <Divider horizontal>OR</Divider></Grid.Column>
                            <Grid.Column mobile={16} >
                                <Button fill color="black">
                                    Login with Email
                    </Button>
                            </Grid.Column>
                            <Divider />
                            <Grid.Column mobile={16} >
                                <Grid.Column mobile={16}>
                                    <Button fill color="black" big onClick={this.SignOut.bind(this) && console.log('Afgemeld')}>
                                        SignOut
                  </Button>
                                </Grid.Column>
                                <Divider />
                                <Grid.Column>
                                    <Checkbox label="I agree to the Terms and Conditions" />

                                </Grid.Column>
                            </Grid.Column>
                            <Grid.Column width={16} >


                            </Grid.Column>
                            <div style={{ textAlign: 'center', position: 'fixed', bottom: 0, padding: '20px' }}>
                                {`Don't have a account? `}
                                <Link loginScreenOpen=".demo-login-screen" > Register now.</Link></div>
                        </Grid>
                    </div>
                </div>
                <LoginScreen className="demo-login-screen" opened={this.state.loginScreenOpened} onLoginScreenClosed={() => { this.setState({ loginScreenOpened: false }) }}>
                    <Page loginScreen>

                        <LoginScreenTitle>Register</LoginScreenTitle>
                        <Segment color='black'>
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
                                <ListInput
                                    label="Confirm Password"
                                    type="password"
                                    placeholder="**********"
                                    value={this.state.confirmpassword}
                                    onInput={(e) => {
                                        this.setState({ confirmpassword: e.target.value });
                                    }}
                                />

                            </List>

                            <List>

                                <Button fluid color="black" outline onClick={this.signIn.bind(this)} big>
                                    Sign In</Button>
                                <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>

                            </List>
                            <div style={{ padding: '70px' }}>
                                <Image circular src={require('../../cuts.JPG')} size="tiny" centered />

                            </div>
                        </Segment>
                    </Page>
                    <BlockFooter style={{ position: 'absolute', bottom: 0 }}>
                        All rights reserved © Cuts
                    </BlockFooter>
                </LoginScreen>

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
    signInFacebook() { return this.signInWithFacebook }
    signInGoogle() {
        return this.signInWithGoogle
    }
    SignOut() {
        firebase.auth().signOut();
    }
    signIn() {
        const self = this;
        const app = self.$f7;

        app.dialog.alert(`Username: ${self.state.username}<br>Password: ${self.state.password}`, () => {
            app.loginScreen.close();
        });
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
