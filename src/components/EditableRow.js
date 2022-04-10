import React from "react";

class EditableRow extends React.Component {

    render() {
        return(
            <>
                <td>
                    <input
                        type="text" 
                        name="firstName" 
                        required="required" 
                        placeholder="Enter a name"
                        onChange={this.props.handleInputChangeFunc}/>
                </td>
                <td>
                    <input
                        type="text" 
                        name="lastName" 
                        required="required" 
                        placeholder="Enter a last name"
                        onChange={this.props.handleInputChangeFunc}/>
                </td>
                <td>
                    <input
                        type="text" 
                        name="phone" 
                        required="required" 
                        placeholder="Enter a phone number"
                        onChange={this.props.handleInputChangeFunc}/>
                </td>
                <td>
                    <button type="submit" className="save-btn">SAVE</button>
                    <button type="reset" className="delete-btn" onClick={() => {return this.props.cancelFunc(this.props.index)}}>CANCEL</button>
                </td>
            </>
        );
    }
}

export default EditableRow;