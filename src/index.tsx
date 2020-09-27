import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Countdown, { startTime } from './Countdown';
import App from './App';

const Component = Date.now() > startTime ? App : Countdown;

// Stop peeking >:(
ReactDOM.render(
	<Component />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
