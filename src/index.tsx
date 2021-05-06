import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import './reset.st.css';

const script = document.createElement('script')
script.src ='https://unpkg.com/ionicons@5.4.0/dist/ionicons.js'
document.body.appendChild(script)
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.body.appendChild(document.createElement('div'))
);
