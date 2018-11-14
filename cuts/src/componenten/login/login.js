import React, { Component } from 'react'
import { Header, Image, Modal, Button, Divider, Form } from 'semantic-ui-react';
import '../login/login.css';

class Login extends Component {
    state = { open: false }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
    render() {
        const { open, dimmer } = this.state
        return (

            <div className="loginContainer">
                <Image src={require('../../cuts.JPG')} size="medium" centered />
                <div style={{ margin: "20px" }}> <Button
                    onClick={this.show('blurring')} fluid content='Login' secondary /> </div>
                <Divider horizontal>OR</Divider>
                <div style={{ margin: "20px" }}> <Button

                    fluid
                    content='Sign up'
                    color="black"
                    basic /> </div>

                <Modal dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Header>Login</Modal.Header>
                    <Modal.Content image>
                        <Form.Group widths='equal'>
                            <Form.Input fluid icon='user circle' iconPosition='left' label='First name' placeholder='First name' />
                            <Form.Input fluid icon='key' iconPosition='left' label='Last name' placeholder='Last name' />
                        </Form.Group>
                        <div> <Form.Button primary onClick={this.close}>Submit</Form.Button>
                        </div>
                    </Modal.Content>

                </Modal>

            </div>


        )
    }
}

export default Login
