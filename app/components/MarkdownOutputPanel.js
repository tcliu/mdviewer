'use strict';
const React = require('react');

module.exports = React.createClass({

  	render: function() {
	    return (
	    	<div className="markdown-panel-body" dangerouslySetInnerHTML={{__html: this.props.value}}></div>
	    );
  	}
});