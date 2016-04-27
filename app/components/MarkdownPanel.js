'use strict';

const React = require('react');
const marked = require('marked');
const MarkdownInputBox = require('./MarkdownInputBox');
const MarkdownOutputPanel = require('./MarkdownOutputPanel');

var MarkdownPanel = React.createClass({

	getInitialState: function() {
		return {mdtext: '', mdoutput: ''};
	},

	onMarkdownChange: function(md) {
		this.setState({
			mdtext: md,
			mdoutput: marked(md, {sanitize: true})
		});
	},

	render: function() {
		return (
		<div className="row">
			<div className="col-lg-6">
				<MarkdownInputBox onChange={this.onMarkdownChange} />
			</div>
			<div className="col-lg-6">
				<MarkdownOutputPanel mdoutput={this.state.mdoutput} />
			</div>
		</div>);
	}

});

module.exports = MarkdownPanel;