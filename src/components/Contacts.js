import React, { Component, Fragment } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '555-555-5',
        id: 1
      },
      {
        name: 'Karen Wilyams',
        email: 'karen@gmail.com',
        phone: '777-777-7',
        id: 2
      },
      {
        name: 'Henory Jonson',
        email: 'henory@gmail.com',
        phone: '111-111-1',
        id: 3
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <Fragment>
        {contacts.map(contact => (
          <Contact
            contact={contact}
            key={contact.id}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </Fragment>
    );
  }
}

export default Contacts;
