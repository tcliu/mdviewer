'use strict';

const React = require('react');

var MarkdownOutputPanel = React.createClass({

  	render: function() {
	    return (
	      <div className="panel panel-default">
	      	<div className="markdown-panel-body panel-body" dangerouslySetInnerHTML={{__html: this.props.mdoutput}}></div>
	      </div>
	    );
  	}
});

module.exports = MarkdownOutputPanel;