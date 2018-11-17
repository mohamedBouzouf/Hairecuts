import React, { Component } from 'react'
import { Grid, Image, Modal, Button, Divider, Form, GridColumn } from 'semantic-ui-react';
import '../login/login.css';

class Login extends Component {
    state = { open: false }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
    render() {
        const { open, dimmer } = this.state
        return (

            <div className="loginContainer">
                <Image src={require('../../cuts.JPG')} size="small" centered />
                <div style={{ marginTop: "90px" }}>
                    <Grid columns={4} centered>
                        <Grid.Column width={13}><Divider /></Grid.Column>
                        <Grid.Column textAlign="center"><Button
                            onClick={this.show('blurring')}
                            size="large"
                            content='Login'
                            secondary />
                        </Grid.Column>
                        <Grid.Column >
                            <Divider vertical>OR</Divider>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <Button
                                size='large'
                                content='Sign up'
                                color="black"
                                basic />
                        </Grid.Column>
                        <Grid.Column width={13}><Divider /></Grid.Column>
                    </Grid>


                </div>
            </div>


        )
    }
}

export default Login
