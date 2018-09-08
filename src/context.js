import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
