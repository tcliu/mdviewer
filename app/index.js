'use strict';

global.$ = global.jQuery = require('jquery');
const Bootstrap = require('bootstrap');
const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App');

ReactDOM.render(<App />, document.getElementById('app'));
