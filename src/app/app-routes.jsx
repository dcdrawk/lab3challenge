var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

var Main = require('./components/main.jsx');
var Register = require('./components/register.jsx');
var Home = require('./components/pages/home.jsx');
var CharacterInfo = require('./components/pages/character-info.jsx');

var AppRoutes = (
  <Route name="root" path="/" handler={Main}>

	<Route name="home" handler={Home} />
	<Route name="register" handler={Register} />
  <Route name="characterInfo" handler={CharacterInfo} />

	<DefaultRoute handler={Home}/>
  </Route>

);

module.exports = AppRoutes;
