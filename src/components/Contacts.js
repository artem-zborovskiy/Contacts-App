import React from "react";
import AddContactForm from './AddContactForm.js';
import ReadOnlyRow from "./ReadOnlyRow.js";
import EditableRow from "./EditableRow.js";
import './css/contacts.css';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            contacts: [],
            newData: {
                firstName: '',
                lastName: '',
                phone: '', 
                id: ''
            }
        };
    }

    componentDidMount() {
        fetch(' https://62378af1b08c39a3af813049.mockapi.io/contacts/contacts')
            .then(res => res.json())
            .then(
                (json) => {
                    this.setState({
                        isLoaded: true,
                        contacts: json
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    addNewContact = (newContact) => {
        let arr = this.state.contacts;
        arr.push(newContact);
        this.setState({contacst: arr});
    }

    deleteContact = (index) => {
        let arr = this.state.contacts;
        arr.splice(index, 1);
        this.setState({contacts: arr});
    }

    showEditMenu = (index) => {
        let arr = this.state.contacts;
        let contact = this.state.contacts[index];
        arr.map((item) => {
            return item.editIndex = null;
        });
        contact.editIndex = index;
        arr[index] = contact;
        let newDataTMP = this.state.newData;
        newDataTMP.id = contact.id;
        this.setState({contacts: arr});
    }

    cancelEditing = (index) => {
        let arr = this.state.contacts;
        let contact = this.state.contacts[index];
        contact.editIndex = null;
        arr[index] = contact;
        this.setState({contacts: arr});
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        const newDataTMP = this.state.newData;

        newDataTMP[name] = value;
        this.setState({newData: newDataTMP});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let arr = this.state.contacts;
        let newDataTMP = this.state.newData;
        let index = arr.findIndex((item) => item.id === newDataTMP.id);
        arr[index] = newDataTMP;
        this.setState({contacts: arr});
        newDataTMP = {
            firstName: '',
            lastName: '',
            phone: '',
            id: ''
        }
        this.setState({newData: newDataTMP});
    }

    render() {
        const { contacts } = this.state;

        return(
            <>
                <h1>Your contacts:</h1>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Phone number</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {contacts.map((contact, index) => (
                                <tr key={contact.id}>
                                    <td>{index + 1}</td>
                                    <td><img src="./profile.png" alt="profile" width="40px" /></td>
                                    {contact.editIndex === index ? <EditableRow cancelFunc={this.cancelEditing} index={index} handleInputChangeFunc={this.handleInputChange}/> : <ReadOnlyRow contact={contact} deleteFunc={this.deleteContact} showEditFunc={this.showEditMenu} index={index}/>}                         
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </form>
                <AddContactForm func={this.addNewContact} />
            </>
        );
    }
}

export default Contacts;