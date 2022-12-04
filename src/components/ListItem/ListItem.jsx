import React from 'react';
import css from '../ListItem/ListItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getStateContacts, getStateFilter } from 'redux/selectors';
const ListItem = () => {
  const arrContacts = useSelector(getStateContacts);
  const filterValue = useSelector(getStateFilter);
  const dispatch = useDispatch();

  const getFilterContact = () => {
    if (filterValue === '') return arrContacts;
    return arrContacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  };
  const filterArrayContacts = getFilterContact();
  return (
    <ul>
      {filterArrayContacts?.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <span>{name}</span> : <span>{number}</span>
          <button
            className="{css.btn_item}"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ListItem;
