import React, { Component } from "react";


import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";

import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";





  
class SpeedDialClass extends Component {
    state = {
        direction: "up",
        open: false,
        hidden: false
    }



    wireUp = which => {
        switch (which) {
          case "GAFFER":
            console.log("You have pressed GAFFER");
            let propertyArray = ["avi"]
            this.props.container_function_checkbox_click_handler(propertyArray)
            break;
          case "HOME":
            console.log("You have pressed HOME");
            break;
          case "GAME":
            console.log("You have pressed GAME");
            break;
          case "SCORES":
            console.log("You have pressed SCORES");
            break;
          default:
            break;
        }
      };
      
    actions = [
        { icon: <FileCopyIcon />, name: "Home", do: () => console.log("OTHER BTN") },
        { icon: <SaveIcon />, name: "Game", do: () => this.wireUp("SCORES") },
        { icon: <PrintIcon />, name: "Scores", do: () => this.wireUp("GAME") },
        { icon: <ShareIcon />, name: "Settings", do: () => this.wireUp("HOME") },
        {
          icon: <DeleteIcon />,
          name: "Gaffer",
          do: () => this.wireUp("GAFFER")
        }
      ];
    



  handleClick = () => {
    // console.log(`First status.open is ${this.state.open}`);
    this.setState(state => ({
      open: !state.open
    }));

  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { direction, hidden, open } = this.state;

    return (
      <div>
        <div>
          <SpeedDial
            ariaLabel="SpeedDial example"
            hidden={hidden}
            icon={<SpeedDialIcon />}
            // onBlur={this.handleClose}
            onClick={this.handleClick}
            // onClose={this.handleClose}
            // onMouseLeave={this.handleClose}
            open={open}
            direction={direction}
          >
            {this.actions.map(action => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                tooltipOpen
                onClick={action.do}
              />
            ))}
          </SpeedDial>
        </div>
      </div>
    );
  }
}


export default SpeedDialClass