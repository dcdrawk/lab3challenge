var React = require('react'),
  Router = require('react-router'),
  mui = require('material-ui');
var Input = mui.Input;
var DropDownMenu = mui.DropDownMenu;
var Register = React.createClass({
	mixins: [Router.Navigation],



	render: function() {
    var menuItems = [
    { payload: '1', text: 'Warrior' },
    { payload: '2', text: 'Rogue' },
    { payload: '3', text: 'Wizard' }
    ];

		return (
		<div className="mui-app-content-canvas">
			<div className="full-width-section">
				<div className="full-width-section-content">
					<h1>Character Info</h1>
					<Input ref="charName" type="text" name="charName" placeholder="Character Name" />
          <div className="mui-font-style-title">Class = <DropDownMenu menuItems={menuItems} /></div>
				</div>
			</div>
		</div>
		);
	}
});

module.exports = Register;
