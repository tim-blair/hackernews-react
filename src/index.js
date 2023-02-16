import React from 'react';
import {createRoot} from 'react-dom/client';
//import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppRouter />);
