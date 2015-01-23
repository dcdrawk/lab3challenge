var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

var Main = require('./components/main.jsx');
var Register = require('./components/register.jsx');
var Home = require('./components/pages/home.jsx');

var AppRoutes = (
  <Route name="root" path="/" handler={Main}>
  
	<Route name="home" handler={Home} />
	<Route name="register" handler={Register} />
	
	
	<DefaultRoute handler={Home}/>
  </Route>
  
);

module.exports = AppRoutes;