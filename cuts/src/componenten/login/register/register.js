import React from 'react';
import {
    Page,
    // Navbar,
    List,
    // LoginScreen,
    LoginScreenTitle,
    ListInput,
    BlockFooter,
    ListButton
    // ListItem,
    // Input,
    // Label,
    // Toggle,
    // BlockTitle,
    // Row,
    // Button,
    // Range,
    // Block
} from 'framework7-react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            Confirmpassword: ''
        };
    }

    render() {
        return (
            <Page noToolbar noNavbar noSwipeback loginScreen>
                <LoginScreenTitle>Register</LoginScreenTitle>
                <List form>
                    <ListInput
                        label="Username"
                        type="text"
                        placeholder="Your username"
                        value={this.state.username}
                        onInput={(e) => {
                            this.setState({ username: e.target.value });
                        }}
                    />
                    <ListInput
                        label="Password"
                        type="password"
                        placeholder="Your password"
                        value={this.state.password}
                        onInput={(e) => {
                            this.setState({ password: e.target.value });
                        }}
                    />
                    <ListInput
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm your password"
                        value={this.state.password}
                        onInput={(e) => {
                            this.setState({ Confirmpassword: e.target.value });
                        }}
                    />
                </List>
                <List>
                    <ListButton onClick={this.signIn.bind(this)}>Sign In</ListButton>
                    <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
                </List>
            </Page>
        )
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