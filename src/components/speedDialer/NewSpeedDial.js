import React, { Component } from 'react'
import { FileCopyIcon } from '@material-ui/icons/FileCopyOutlined'
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

class NewSpeedDial extends Component{

    constructor(props){
        super(props)
        this.state = {
            open: false,
            hidden: false,
        }

        this.handleVisibility = this.handleVisibility.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        // { icon: <SaveIcon />, name: 'Save' },
        // { icon: <PrintIcon />, name: 'Print' },
        // { icon: <ShareIcon />, name: 'Share' },
        // { icon: <FavoriteIcon />, name: 'Like' },
    ];
  
    handleVisibility = () => {
        let currentStateOfDailer = this.state.open
        let nextStateOfDailer = !currentStateOfDailer
        // let payload = {...this.state}
        let payload = {"hidden": nextStateOfDailer}
        // payload["hidden"] = nextStateOfDailer
        console.log( "handleVis" + payload)
        // return this.setState( () => payload)
    };
  
    handleToggle = toggle => {
        // let payload = {...this.state}
        // payload["open"] = toggle
        // console.log("Toggle: "+payload)
        let payload = {"open": toggle}
        console.log(payload)
        console.log(this.actions)
        // return this.setState( () => payload)
    };


    render(){
        return(

            <div>
            
                <Button onClick={this.handleVisibility}>Toggle Speed Dial</Button>
                <Backdrop open={this.state.open} />
            </div>

            // <div>
            // <SpeedDial
            //     ariaLabel="SpeedDial tooltip example"
            //     hidden={this.state.hidden}
            //     icon={<SpeedDialIcon />}
            //     onClose={this.handleToggle(false)}
            //     onOpen={this.handleToggle(true)}
            //     open={this.state.open}
            // >
            //     {this.actions.map(action => (
            //     <SpeedDialAction
            //         key={action.name}
            //         icon={action.icon}
            //         tooltipTitle={action.name}
            //         tooltipOpen
            //         onClick={this.handleToggle(true)}
            //     />
            //     ))}
            // </SpeedDial>
            // </div>
            


        )
    }

}

export default NewSpeedDial