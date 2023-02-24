import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/phonebook/contactsSlice';
import { selectFilter } from 'redux/phonebook/filterSlice';

import ContactListItem from '../Contact/ContactListItem';

import { List } from '@mui/material';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filterStatus = filter.status;
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterStatus)
  );

  return (
    <List>
      {filteredContacts.map(contact => {
        return <ContactListItem contact={contact} key={contact.id} />;
      })}
    </List>
  );
};

export default ContactList;
