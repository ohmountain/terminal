import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Index extends Component {
    render() {
        return <div className='index-component-wrapper'>
            <div className='index-attention-wrapper'>
            <div>
            正在施工中
            <p style={{ textAlign: 'center' }}>
            <Link to='/'>返回</Link>
            </p>
            </div>
            </div>
            </div>;
    }
}

export default Index;
