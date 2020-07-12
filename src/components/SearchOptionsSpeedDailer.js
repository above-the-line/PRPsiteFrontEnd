import React, { use } from 'react'
import { Component } from 'react'
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

class SearchOptionsSpeedDailer extends Component {

    constructor(props){
        super(props)
        this.state = {
            open: false,
            hidden: false,
        }
    }
  
    render() {
        return (
            <div>
                <div className="flex flex-column mt3">
                {this.props.checkBoxOptions.map (property =>
                    <label
                    key={property+"_checkbox"}
                    >
                        {property}
                        <input
                        className="mb2"
                        value={property}
                        name={property}
                        onChange={this.props.container_function_checkbox_click_handler}
                        type="checkbox"
                        />
                    </label>
                )}
                </div>
            </div>
        )
    }
}

export default SearchOptionsSpeedDailer 