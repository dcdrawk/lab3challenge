var React = require('react'),
	mui = require('material-ui'),
	Router = require('react-router');
	React.initializeTouchEvents(true);
	var RouteHandler = Router.RouteHandler;
	var Menu = mui.Menu;
	
	RaisedButton = mui.RaisedButton;
	LeftNav = mui.LeftNav;
	var AppBar = mui.AppBar;
	var AppCanvas = mui.AppCanvas;
	var AppLeftNav = require('./left-nav.jsx');
	
	menuItems = [
		{ route: 'get-started', text: 'Get Started' },
		{ route: 'css-framework', text: 'CSS Framework' },
		{ route: 'components', text: 'Components' },
		{ type: mui.MenuItem.Types.SUBHEADER, text: 'Resources' },
		{ 
			type: mui.MenuItem.Types.LINK, 
			payload: 'https://github.com/callemall/material-ui', 
			text: 'GitHub' 
		},
	];
	
var Main = React.createClass({
	mixins: [Router.State],
	
  render: function() {
	var title = 'Lab 3 Challenge';
    return (
	
	<AppCanvas predefinedLayout={1}>
	
		<AppBar
			className="mui-dark-theme"
			onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
			title={title}
			zDepth={0}>
		</AppBar>
		
		<AppLeftNav ref="leftNav" />
		
		<RouteHandler />
		
	</AppCanvas>
    );
  },

  _handleTouchTap: function() {
    alert('1-2-3-4-5');
  },
   _onMenuIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  }

});

module.exports = Main;