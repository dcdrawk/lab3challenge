var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
var HomeFeature = require('./home-feature.jsx');

var HomePage = React.createClass({

  mixins: [Router.Navigation],

  render: function() {

    return (
      <div className="mui-app-content-canvas">
        <div className="home-page-hero full-width-section">
          <div className="home-page-hero-content">
            <div className="tagline">
              <h1 className="brand-name">Lab 3 Challenge</h1>
            </div>
          </div>
        </div>

        <div className="full-width-section">
          <p className="full-width-section-content mui-font-style-title">
            I've designed this lab challange by combining pieces from the Material-UI <a href="https://github.com/callemall/material-ui/tree/master/example" target="_blank">example</a> and <a href="https://github.com/callemall/material-ui/tree/master/docs" target="_blank">docs </a> folders.
          </p>
		</div>

       

      </div>
    );
  },

  _onDemoClick: function() {
    this.transitionTo('components');
  }

});

module.exports = HomePage;