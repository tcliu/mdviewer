'use strict';
const React = require('react');
const marked = require('marked');
const MarkdownInputBox = require('./MarkdownInputBox');
const MarkdownOutputPanel = require('./MarkdownOutputPanel');

module.exports = React.createClass({

	getInitialState: function() {
		var v = this.props.value;
		if (!v && typeof localStorage !== 'undefined') {
			v = localStorage.getItem('markdown');
		}
		return {value: v || ''};
	},

	onChange: function(md) {
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('markdown', md);
		}
		this.setState({value: md});
	},

	render: function() {
		return (
		<div className="row">
			<div className="col-lg-6">
				<MarkdownInputBox value={this.state.value} onChange={this.onChange} />
			</div>
			<div className="col-lg-6">
				<MarkdownOutputPanel value={marked(this.state.value, {sanitize: true})} />
			</div>
		</div>);
	}

});