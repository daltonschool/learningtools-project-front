import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';
import 'bulma/css/bulma.css'

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);