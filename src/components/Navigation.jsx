import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stack,
  Button,
  // Input
} from '@chakra-ui/react'


export const Navigation = () => {
  return (
    <nav>
      <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='pink' variant='solid'>
          <Link to="/">Events navigation</Link>
        </Button>
        <Button colorScheme='pink' variant='solid'>
          <Link to="/event/addEvent">Add your own event</Link>
        </Button>
        {/* <Input/> */}
        <Button colorScheme='pink' variant='solid'>
          Button
        </Button>
      </Stack>
    </nav>
  );
};



// icon={<ExternalLinkIcon />}

{/* <nav>
      <ul>
        <li>
          <Link to="/">Events navigation</Link>
        </li>
        <li>
          <Link to="/event/add">Add your own event</Link>
        </li>
      </ul>
    </nav> */}