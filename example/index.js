import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../src/Button';

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Button>Test</Button>, container);