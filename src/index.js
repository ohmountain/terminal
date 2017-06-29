import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "./styles/css/index.css"
import "./styles/css/normalize.css"

import registerServiceWorker from './registerServiceWorker';

var music = 'http://nhds.oss-cn-hangzhou.aliyuncs.com/picture-wall/audio/kaimushi/test_94448214.mp3';

window.addEventListener('load', () => {
    var au = document.createElement('audio');
    au.src = music;
    au.volume = .2;
    document.body.appendChild(au);
    au.play();
    au.addEventListener('ended',  () => au.remove());
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
