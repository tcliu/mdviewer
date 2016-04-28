'use strict';
const React = require('react');

module.exports = React.createClass({

	getInitialState: function() {
		return {value: this.props.value || ''};
	},

	onKeyDown: function(e) {
		if (e.keyCode == 9) {
			this.state.value += '\t';
			this.forceUpdate();
			e.preventDefault();
		}
	},

	onChange: function(e) {
		var v = e.target.value;
		this.setState({value: v});
		if (this.props.onChange) {
			this.props.onChange(v);
		}
	},

	render: function() {
		return (
			<form>
			  <div className="form-group">
			    <textarea className="markdown-input form-control" autoFocus={true} placeholder="Markdown something ..." value={this.state.value} 
			    	onKeyDown={this.onKeyDown} onChange={this.onChange}></textarea>
			  </div>
			</form>
		);
	}
});