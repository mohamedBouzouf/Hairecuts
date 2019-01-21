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
                    <Modal dimmer={dimmer} open={open} onClose={this.close}>
                        <Modal.Header>Login</Modal.Header>
                        <Modal.Content image>
                            <Form.Group widths='equal'>
                                <Form.Input fluid icon='user circle' iconPosition='left' label='First name' placeholder='First name' />
                                <Form.Input fluid icon='key' iconPosition='left' label='Last name' placeholder='Last name' />
                            </Form.Group>
                            <div style={{ marginBottom: '60xp' }}> <Form.Button primary onClick={this.close}>Submit</Form.Button>
                            </div>
                        </Modal.Content>
                    </Modal>

                </div>
            </div>


        )
    }
}

export default Login
