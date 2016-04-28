'use strict';
const React = require('react');
const Nav = require('./nav');
const MarkdownPanel = require('./MarkdownPanel');

module.exports = React.createClass({
	render: function() {
		return (
		<div className="container-fluid">
			<Nav />
			<MarkdownPanel />
		</div>
		)
	}
});