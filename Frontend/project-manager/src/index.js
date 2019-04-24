import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/store'
import {Provider} from 'react-redux'

ReactDOM.render(
        <App />
   , document.getElementById('root'));
    
serviceWorker.unregister();
