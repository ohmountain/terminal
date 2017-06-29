import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "./styles/css/index.css"
import "./styles/css/normalize.css"

import registerServiceWorker from './registerServiceWorker';

var music = 'http://nhds.oss-cn-hangzhou.aliyuncs.com/picture-wall/audio/kaimushi/test_94448214.mp3';
var music_1 = 'http://nhds.oss-cn-hangzhou.aliyuncs.com/picture-wall/audio/kaimushi/test_03962168.aac';

window.addEventListener('load', () => {
    var au = document.createElement('audio');
    au.src = music_1;
    au.volume = .1;
    document.body.appendChild(au);
    au.play();
    au.addEventListener('ended',  () => au.remove());
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
