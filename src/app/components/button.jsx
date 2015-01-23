/**
 * @jsx React.DOM
*/

var React = require('react'),
  mui = require('material-ui'),
  RaisedButton = mui.RaisedButton;

var SomeAwesomeComponent = React.createClass({

  render: function() {
    return (
        <RaisedButton label="Default" />
    );
  }

});

module.exports = SomeAwesomeComponent;