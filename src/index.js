import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Graphs from './pages/Graphs';
import { Router, Route } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
registerServiceWorker();
