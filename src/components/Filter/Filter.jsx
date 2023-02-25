import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { setStatusFilter } from '../../redux/phonebook/filterSlice';
import { selectFilter } from 'redux/phonebook/filterSlice';

import css from './Filter.module.css';

import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const filterInputRef = useRef(null);
  const filter = useSelector(selectFilter);
  const filterStatus = filter.status;

  const handleFilter = () => {
    const filter = filterInputRef.current.value.toLowerCase();
    dispatch(setStatusFilter(filter));
  };

  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>
      <TextField
        id="filter"
        type="text"
        label="type to filter"
        name="filter"
        value={filterStatus}
        onChange={handleFilter}
        inputRef={filterInputRef}
      />
    </div>
  );
};

export default Filter;
