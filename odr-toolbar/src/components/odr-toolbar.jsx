import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../../src/styles/odr-toolbar.css";
import messages from "../lang/default-messages";

//Toolbar specific imports
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import {Toolbar, ToolbarGroup, ToolbarSeperator, ToolbarTitle} from 'material-ui/Toolbar';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert.js';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu.js';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

export default class OdrToolbar extends React.Component {

  render() {
    return (
		<MuiThemeProvider>
			<Toolbar className={styles.toolbar}>
				<ToolbarGroup firstChild={true}>
					<IconButton tooltip="Open Menu" touch={true} tooltipPosition="bottom-right" onClick={this.props.openMenu}>
		 				<NavigationMenu className={styles.toolbarMenuIcon}/>
	 				</IconButton>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarTitle text={this.props.titleText} className={styles.toolbarTitleText}/>
				</ToolbarGroup>
				<ToolbarGroup lastChild={true}>
						<IconMenu
	            iconButtonElement={
	              <IconButton touch={true}>
	                <NavigationMoreVert className={styles.toolbarMoreVert}/>
	              </IconButton>
	            }
	          >
	            <MenuItem primaryText="Preferences" />
							<Divider/>
	            <MenuItem primaryText="Logout" />
						</IconMenu>
				</ToolbarGroup>
			</Toolbar>
		</MuiThemeProvider>
    );
  }
}

OdrToolbar.displayName = "OdrToolbar";

OdrToolbar.propTypes = {
	openMenu : React.PropTypes.func,
	titleText : React.PropTypes.string
};

OdrToolbar.defaultProps = {
	titleText : 'On Demand Replenishment'
};


/*
<div className={styles.someStyle}>
	<FormattedMessage {...messages.editMe} />
</div>
*/
