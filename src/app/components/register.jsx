var React = require('react'),
  Router = require('react-router'),
  mui = require('material-ui');
 var Input = mui.Input;

var Register = React.createClass({
	mixins: [Router.Navigation],
	
	render: function() {
		return (
		<div className="mui-app-content-canvas">
			<div className="full-width-section">
				<div className="full-width-section-content">
					<h1>Testing This out</h1>
					<Input ref="firstname" type="text" name="firstname" placeholder="First Name" />
				</div>
			</div>
		</div>
		);
	}
});

module.exports = Register;