import React from 'react';
import css from '../ListItem/ListItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getStateContacts, getStateFilter } from 'redux/selectors';
import { Button, Text } from '@chakra-ui/react';
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
          <Text as="samp">{name}</Text>:<Text as="samp">{number}</Text>
          <Button
            size="xs"
            colorScheme="teal"
            variant="outline"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};
export default ListItem;
