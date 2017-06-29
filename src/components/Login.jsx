import React, { Component } from 'react';

import keybordVoice from '../attachments/keyborder';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: false,
            value: null
        };
    }

    handleInputChange(e) {
        var au = document.createElement('audio');
        au.src = keybordVoice;
        document.body.appendChild(au);
        au.play();
        au.onended =  () => {
            au.remove();
        };

        setTimeout(() => {
            au.remove();
        }, 1000);

        var pt = /^\w{1,12}$/;
        var error = false;

        if (e.target.value.length != 0 && e.target.value.match(pt) === null) {
            e.target.style.outlineColor = 'red';
        } else {
            e.target.style.outlineColor = '#222';
        }

        this.setState({
            error,
            value: e.target.value
        });
    }

    render() {
        return <div className='login-component-wrapper'>
            <div className='login-form-wrapper'>
                <div className='login-form-group'>
            <input placeholder="Your name" onInput={ this.handleInputChange.bind(this) } maxLength={12}/>
                </div>
                </div>
            </div>;
    }
}

export default Login;
