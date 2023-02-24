import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  selectContacts,
} from '../../redux/phonebook/contactsSlice';

import css from './ContactForm.module.css';

import { Button, TextField } from '@mui/material';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const inputNameRef = useRef(null);
  const inputNumberRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact();
  };

  const handleAddContact = () => {
    const contactName = inputNameRef.current.value;
    const contactNumber = inputNumberRef.current.value;

    const newContact = {
      name: contactName,
      number: contactNumber,
    };

    const checkName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (checkName !== undefined) {
      return alert(`${checkName.name} is already in contacts.`);
    }

    dispatch(addContact(newContact));
    inputNameRef.current.value = '';
    inputNumberRef.current.value = '';
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <section className={css.section}>
        <TextField
          required
          type="text"
          id="name"
          name="name"
          label="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          inputRef={inputNameRef}
        />
      </section>
      <section className={css.section}>
        <TextField
          required
          id="tel"
          type="tel"
          name="number"
          label="Phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          inputRef={inputNumberRef}
        />
      </section>
      <Button variant="contained" type="submit">
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
