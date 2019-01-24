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
                        value={props.rusername} 
                        onInput={props.userHandle}
                    />
                    <ListInput
                        label="Password"
                        type="password"
                        placeholder="**********"
                        value={props.rpassword}
                        onInput={props.passHandle}
                    />
                </List>
                <List>
                    <Button onClick={props.registrationSuccess}>
                        Register</Button>
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