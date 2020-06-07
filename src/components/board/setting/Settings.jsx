import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import DraftsIcon from "@material-ui/icons/Drafts";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

const styles = {
  iconSetting: {
    boxShadow: "0 2px 11px 0px rgba(0,0,0,0.2), 0 3px 6px rgba(0,0,0,0.1)",
    margin: "4rem auto 0 auto",
    width: "fit-content",
    borderRadius: "50%",
  },
};

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

function Settings({ reset, mainSetting }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleResetClick = () => {
    reset();
    setAnchorEl(null);
  };

  const handleMainSettingClick = () => {
    mainSetting();
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? "simple-popover" : undefined;
  return (
    <div style={styles.iconSetting}>
      <IconButton color="primary" aria-label="settings" onClick={handleClick}>
        <SettingsIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List component="nav" aria-label="settings popover">
          <ListItem button onClick={handleResetClick}>
            <ListItemIcon>
              <HourglassEmptyIcon />
            </ListItemIcon>
            <ListItemText primary="Reset" />
          </ListItem>
          <ListItem button onClick={handleMainSettingClick}>
            <ListItemIcon>
              <RotateLeftIcon />
            </ListItemIcon>
            <ListItemText primary="Main Setting" />
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}

export default Settings;
