import { Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = e => {
    const value = e.currentTarget.value;
    dispatch(filter(value));
  };
  return (
    <Input
      size="sm"
      placeholder="Search contacts"
      type="text"
      onChange={e => {
        changeFilter(e);
      }}
    />
  );
};
export default Filter;
