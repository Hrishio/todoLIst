import { HStack, Text } from '@chakra-ui/react';
import React from 'react';
import CustomButton from '../../atoms/button/CustomButton';
import useTodoStore from '../../../utils/store';

const Card = ({ todo }) => {
  const { completed, id, text } = todo;
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const handleRemove = () => {
    removeTodo(id); 
  };

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100%', margin:'10px', marginTop:'20px'}} className='todo-card-container'>
    <HStack spacing={4} align="center" className='todo-card'>
      <Text fontWeight={completed ? 'bold' : 'normal'} as={completed ? 'del' : undefined}>
        {text.title || 'No Title'}
      </Text>
      <Text fontSize="sm" color="gray.500">{text.description || 'No description'}</Text>
      <CustomButton 
      className='delete-button'
      style={{marginLeft:'10px'}}
        colorScheme="red" 
        size="sm" 
        name="Delete" 
        onClick={handleRemove} 
        />
    </HStack>
        </div>
  );
}

export default Card;
