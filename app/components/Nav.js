'use strict';
const React = require('react')

module.exports = React.createClass({

	render: function() {
		return (<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">Markdown Viewer</a>
					</div>
				</div>
			</nav>);
	}

});