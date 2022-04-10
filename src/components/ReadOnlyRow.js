import React from "react";

class ReadOnlyRow extends React.Component {
    render() {
        return(
            <>
                <td>{this.props.contact.firstName}</td>
                <td>{this.props.contact.lastName}</td>
                <td>{this.props.contact.phone}</td>
                <td>
                    <button type="button" className="edit-btn" onClick={() => {return this.props.showEditFunc(this.props.index)}}>EDIT</button>
                    <button type="button" className="delete-btn" onClick={() => {return this.props.deleteFunc(this.props.index)}}>DELETE</button>
                </td>
            </>  
        );
    }
}

export default ReadOnlyRow;