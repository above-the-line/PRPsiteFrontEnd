import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

class SwipeableTemporaryDrawer extends Component {

    state = {
        toggle: "closed",

    }

    toggleDrawer = (anchor, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab '|| event.key === 'Shift')){
            return
        }

        let payload = {[anchor]: open}
        this.setState({ payload })
    };

    list = anchor => (
    <div
        className="Class"
        role="presentation"
        onClick={this.toggleDrawer(anchor, false)}
        onKeyDown={this.toggleDrawer(anchor, false)}
    >
        <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
            </ListItem>
        ))}
        </List>
        <Divider />
        <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
            </ListItem>
        ))}
        </List>
    </div>
    );    

    render (){
        return (
        <div>
          {['left'].map(anchor => (
            <React.fragment key={anchor}>
              <Button onClick={this.toggleDrawer(anchor, true)}>{anchor}</Button>
              <SwipeableDrawer
                anchor={anchor}
                open={this.state[anchor]}
                onClose={this.toggleDrawer(anchor, false)}
                onOpen={this.toggleDrawer(anchor, true)}
              >
                {this.list(anchor)}
              </SwipeableDrawer>
            </React.fragment>
          ))}
        </div>
      )
    }
}

export default SwipeableTemporaryDrawer