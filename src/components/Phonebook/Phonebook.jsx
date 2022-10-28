import React from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import css from '../Phonebook/Phonebook.module.css';
import Filter from 'components/Filter/Filter';
import ListItem from 'components/ListItem/ListItem';
class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', names: 'Rosie Simpson', numbers: '459-12-56' },
      { id: 'id-2', names: 'Hermione Kline', numbers: '443-89-12' },
      { id: 'id-3', names: 'Eden Clements', numbers: '645-17-79' },
      { id: 'id-4', names: 'Annie Copeland', numbers: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };
  addItem = (names, numbers) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        { names: names, numbers: numbers, id: nanoid() },
      ],
    });
    console.log(names, numbers);
  };
  formSubmitChanging = data => {
    this.setState(this.addItem(data.name, data.number));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const filterContact = this.state.contacts.filter(contact =>
      contact.names.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <>
        <div className={css.div_form}>
          <h1>Phonebook</h1>
          <Form onSubmit={this.formSubmitChanging} />
        </div>
        {this.state.contacts.length ? (
          <>
            <h2>Contacts</h2>
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            <ListItem contacts={filterContact} onDelete={this.deleteContact} />
          </>
        ) : (
          <h3>Write contact</h3>
        )}
      </>
    );
  }
}
export default Phonebook;
