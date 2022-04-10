import React from "react";
import { nanoid } from "nanoid";
import './css/addContactForm.css';

class AddContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            firstName: '',
            lastName: '',
            phone: '', 
            id: ''
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.func({
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            phone: this.state.phone, 
            id: nanoid()
        });

        this.setState({
            firstName: '', 
            lastName: '', 
            phone: '', 
            id: '',
            show: false
        })
    }

    render() {
        if(!this.state.show) {
            return <button className='add-btn' onClick={() => {this.setState({show: true})}}>ADD NEW CONTACT</button>;
        } else {
            return(
                <>
                    <button className='add-btn' onClick={() => {this.setState({show: true})}}>ADD NEW CONTACT</button>
                    <div className="modal">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>Add new contact:</h3>
                            </div>
        
                            <div className="modal-body">
                                <form onSubmit={this.handleSubmit}>
                                    <input
                                        type="text" 
                                        name="firstName" 
                                        required="required" 
                                        placeholder="Enter a name"
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}/>
                                    <input type="text"
                                        name="lastName" 
                                        required="required" 
                                        placeholder="Enter a surname" 
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}/>
                                    <input 
                                        type="text" 
                                        name="phone" 
                                        required="required" 
                                        placeholder="Enter a phone number"
                                        value={this.state.phone}
                                        onChange={this.handleInputChange}/>
                                    
                                    <div className="modal-footer">
                                        <button className="delete-btn" type="reset" onClick={() => {this.setState({show: false, firstName: '', lastName: '', phone: '', id: ''})}}>CLOSE</button>
                                        <button className="save-btn" type="submit">SAVE</button>
                                    </div>
                                </form>
                            </div>                       
                        </div>
                    </div>
                </>
            );
        }   
    }
}

export default AddContactForm;