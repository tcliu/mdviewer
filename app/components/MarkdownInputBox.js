'use strict';

const React = require('react');

var MarkdownInputBox = React.createClass({

	getInitialState: function() {
		var v = this.props.value;
		if (!v && typeof localStorage !== 'undefined') {
			v = localStorage.getItem('markdown');
		}
		return {value: v || ''};
	},

	onKeyDown: function(e) {
		if (e.keyCode == 9) {
			this.input.value += '\t';
			e.preventDefault();
		}

	},

	updateMarkdown: function(e) {
		this.setState({value: e.target.value});
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('markdown', this.state.value);
		}
		if (this.props.onChange) {
			this.props.onChange(this.state.value);
		}
	},

	render: function() {
		return (
			<form>
			  <div className="form-group">
			    <textarea className="markdown-input form-control" autoFocus={true} placeholder="Markdown" value={this.state.value} onKeyDown={this.onKeyDown} 
			    	onChange={this.updateMarkdown} ref={(ref) => this.input = ref}></textarea>
			  </div>
			</form>
		);
	}
});

module.exports = MarkdownInputBox;