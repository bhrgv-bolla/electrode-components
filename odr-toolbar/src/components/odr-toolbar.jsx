import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../../src/styles/odr-toolbar.css";
import messages from "../lang/default-messages";

export default class OdrToolbar extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        <FormattedMessage {...messages.editMe} />
      </div>
    );
  }
}

OdrToolbar.displayName = "OdrToolbar";

OdrToolbar.propTypes = {};

OdrToolbar.defaultProps = {};
