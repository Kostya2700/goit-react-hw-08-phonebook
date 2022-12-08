import React from 'react';
import PropTypes from 'prop-types';
import { Center, Text } from '@chakra-ui/react';
export const Title = ({ title }) => {
  return (
    <Center>
      <Text as="u" fontSize="30px">
        {title}
      </Text>
    </Center>
  );
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
};
