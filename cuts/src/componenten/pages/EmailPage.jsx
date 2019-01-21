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
    <LoginScreen className="login-screen App" opened={props.loginScreenOpened} onLoginScreenClosed={() => { this.setState({ loginScreenOpened: false }) }}>
        <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <div style={{ padding: '20px' }}>
                <List form>
                    <ListInput
                        label="Username"
                        type="text"
                        placeholder="Your username"
                        value={props.username} onInput={(e) => {
                            this.setState({ username: e.target.value });
                        }}
                    />
                    <ListInput
                        label="Password"
                        type="password"
                        placeholder="**********"
                        value={props.password}
                        onInput={(e) => {
                            this.setState({ password: e.target.value });
                        }}
                    />
                </List>
                <List>
                    <Button onClick={props.signIn}>
                        Sign In</Button>
                    <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
                </List>
                <div style={{ padding: '20px' }}>
                    <Image circular src={props.imagetiny} alt='cuts' centered />
                </div>
            </div>
        </Page>
        <div style={{ textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
            <BlockFooter>
                <span>All Rights Reserved © Cuts</span>
            </BlockFooter>
        </div>
    </LoginScreen>
);