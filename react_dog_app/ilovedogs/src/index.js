import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './Helpers/Header.css';
import './Helpers/Form.css';
import './Helpers/Dogs.css';
import './Helpers/Footer.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*
    File name: Index.js
    Author: Chrystian Rafael Sanches dos Santos
    Date: September 28, 2018
    Description: Big boss of the application, it will use ReactDOM to render our UI to the screen so the user will be able to see our wonderful app.
 */

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
