import React from 'react';
import {
    Page,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListInput,
    BlockFooter
} from 'framework7-react';
import { Image } from 'semantic-ui-react';
import { Button } from 'react-bootstrap';

export default (props) => (
    <LoginScreen className="register-screen" opened={props.registerScreenOpened} onLoginScreenClosed={() => { this.setState({ registerScreenOpened: false }) }}>
        <Page loginScreen>
            <LoginScreenTitle>Register</LoginScreenTitle>
            <div style={{ padding: '20px' }}>
                <List form>
                    <ListInput
                        label="Username"
                        type="text"
                        placeholder="Your username"
                        value={props.R_username} onInput={(e) => {
                            this.setState({ R_username: e.target.value });
                        }}
                    />
                    <ListInput
                        label="Password"
                        type="password"
                        placeholder="**********"
                        value={props.R_password}
                        onInput={(e) => {
                            this.setState({ R_password: e.target.value });
                        }}
                    />
                    <ListInput
                        label="Confirm Password"
                        type="password"
                        placeholder="**********"
                        value={props.confirmpassword}
                        onInput={(e) => {
                            this.setState({ R_confirmpassword: e.target.value });
                        }}
                    />
                </List>
                <List>
                    <Button onClick={props.registrationSuccess}>
                        Sign In</Button>
                    <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
                </List>
                <div style={{ padding: '10px' }}>
                    <Image circular src={props.imagetiny} alt='cuts' centered />
                </div>
            </div>
        </Page>
        <div style={{ textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
            <BlockFooter >
                <span>All Rights Reserved © Cuts</span>
            </BlockFooter>
        </div>
    </LoginScreen>
);