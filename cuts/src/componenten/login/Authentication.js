import React, { Component } from 'react';
import firebase from './firebaseConfig';
import withFirebaseAuth from "react-auth-firebase";
import sweet from 'sweetalert';
import { Icon } from 'antd';

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
            current: true
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            if (user === null) {
                sweet({
                    title: 'Logged Out',
                    type: 'error',
                    icon: 'error'

                });

            } else {
                sweet({
                    title: 'Logged In',
                    type: 'success',
                    icon: 'success'
                });
            }
        })
    }

    render() {

        const {
            signInWithGoogle,
            signInWithFacebook,
        } = this.props;
        const { email, password } = this.state;
        return (
            (this.state.current ? (
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
                                    <Grid.Column mobile={16}>
                                        <Button fill="true" color="black" onClick={this.SignOut.bind(this)}>
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
                                <div style={{ textAlign: 'center', position: 'fixed', bottom: 0 }}>
                                    <BlockFooter >
                                        {`Don't have a account? `}
                                        <Link loginScreenOpen=".register-screen" > Register now.</Link>
                                    </BlockFooter>
                                </div>
                            </Grid>
                        </div>
                    </div>
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
                                    <Image circular src={require('../../cuts.JPG')} size="tiny" centered />
                                </div>
                            </div>
                        </Page>
                        <div style={{ textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
                            <BlockFooter >
                                <span>All Rights Reserved © Cuts</span>
                            </BlockFooter>
                        </div>
                    </LoginScreen>
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
                                    <Image circular src={require('../../cuts.JPG')} size="tiny" centered />
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
        app.dialog.alert(`${self.state.username}`, 'Welcome back ', () => {
            app.loginScreen.close();
            this.setState({
                current: false
            })
            this.$f7.view.main.router.navigate('/userbarberpage/');

        });
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

        app.dialog.alert(`Username: ${self.state.R_username}`, 'Welcome ! ', () => {
            app.loginScreen.close();
            this.$f7.view.main.router.navigate('/userbarberpage/');


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
