import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchContacts,
  selectContacts,
  selectIsLoading,
  selectError,
} from '../redux/phonebook/contactsSlice';

import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import css from '../components/App.module.css';

export default function PhonebookPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.h1}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.h2}>Contacts</h2>
      <Filter />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {contacts.length === 0 && !isLoading && <div>No contacts to show</div>}
      {contacts.length > 0 && <ContactList />}
    </>
  );
}
