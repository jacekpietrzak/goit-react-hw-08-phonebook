import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/phonebook/contactsSlice';

// import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

import {
  IconButton,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleRemoveContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText primary={`${contact.name}: ${contact.number}`} />
        <IconButton
          aria-label="delete"
          type="button"
          variant="contained"
          color="error"
          size="small"
          id={contact.id}
          onClick={() => handleRemoveContact(contact.id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default Contact;
