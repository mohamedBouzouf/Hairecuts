import React, { Component } from 'react';
import { Button } from 'antd';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="cardcolor">
                    <form action="">
                        <div className="form-group">
                            <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="InputPassword" placeholder="Password" />
                        </div>
                        {/* <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button> */}
                        <Button type="primary">Login</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login