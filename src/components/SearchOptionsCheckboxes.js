import React, { Component } from 'react'


class SeachOptionsCheckboxes extends Component {

    render() {
        return (
            //Create tickboxes for all properties in array declared above
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

export default SeachOptionsCheckboxes 