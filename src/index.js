import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer, setConfig } from 'react-hot-loader'
import './index.css';
import App from './App';

const render = Component => {
	ReactDOM.render(
		<React.StrictMode>
			<Component />
		</React.StrictMode>,
		document.getElementById('root')
	);
}

render(App);
