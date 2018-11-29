import React, { Component } from 'react'
import { Form, Divider, Image, Dimmer } from 'semantic-ui-react'

import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

class Register extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value });

    render() {
        const { value } = this.state
        return (
            <div>

                <div style={{ marginBottom: '50px' }}>

                    <Image src={require('../../cuts.JPG')}
                        size='tiny' verticalAlign='top'
                        centered circular />
                </div>
                <Divider className="divcolor" />
                <div style={{ marginTop: '50px', marginBottom: '50px', textAlign: 'left' }}>
                    <Form>

                        <Form.Group widths='equal'>
                            <Form.Input fluid icon='user circle' iconPosition='left' label='First name' placeholder='First name' />
                            <Form.Input fluid icon='key' iconPosition='left' label='Last name' placeholder='Last name' />
                            <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
                        </Form.Group>
                        <Form.Checkbox label='I agree to the Terms and Conditions' />
                        <Form.Button primary>Submit</Form.Button>
                    </Form>
                </div>
                <Divider />
            </div>
        );
    }
}

export default Register