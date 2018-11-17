import React, { Component } from 'react'
import { Form, Divider, Header } from 'semantic-ui-react'

import '../login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// const options = [
//     { key: 'm', text: 'Male', value: 'male' },
//     { key: 'f', text: 'Female', value: 'female' },
// ]

class Register extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    render() {
        const { value } = this.state
        return (
            <div className="login-background">
                <div className="container">
                    <div style={{ marginBottom: '20px' }}>
                        <Header><h1>Register</h1></Header>
                    </div>
                    <Divider className="divcolor" />
                    <div style={{ marginTop: '20px', marginBottom: '20px', textAlign: 'left' }}>
                        <Form>
                            <Form.Group
                                widths='equal'>
                                <Form.Input fluid
                                    size='large'
                                    icon='address card'
                                    iconPosition='left'
                                    label='First name'
                                    placeholder='First name' required />
                                <Form.Input fluid
                                    size='large'
                                    icon='address card'
                                    iconPosition='left'
                                    label='Last name'
                                    placeholder='Last name' required />
                                <Form.Input fluid
                                    size='large'
                                    icon='user circle'
                                    iconPosition='left'
                                    label='Username'
                                    placeholder='Username' required />
                                <Form.Input fluid
                                    size='large'
                                    icon='key'
                                    iconPosition='left'
                                    label='Password'
                                    type={'number'}
                                    placeholder='Password' required />
                                <Form.Input fluid
                                    size='large'
                                    icon='key'
                                    iconPosition='left'
                                    label='Confirm password'
                                    placeholder='Confirm password' required />

                            </Form.Group>
                            <Form.Checkbox
                                label='I agree to the Terms and Conditions' />
                            <Form.Button
                                primary>Submit</Form.Button>
                        </Form>
                    </div>
                    <Divider />
                    <WingBlank>
                        <Carousel
                            autoplay={false}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                        >
                            {this.state.data.map(val => (
                                <a
                                    key={val}
                                    href="http://www.alipay.com"
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    </WingBlank>
                </div>
            </div>

        );
    }
}

export default Register