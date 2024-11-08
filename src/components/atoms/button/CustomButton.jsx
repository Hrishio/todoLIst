import React from 'react';
import { Button } from '@chakra-ui/react';
const CustomButton = ({ onClick, colorScheme, name, size, type }) => {
  return (
    <Button onClick={onClick} colorScheme={colorScheme} size={size} type={type} className='button'>
      {name}
    </Button>
  );
};
export default CustomButton;
