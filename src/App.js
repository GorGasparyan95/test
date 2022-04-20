import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from './providers';
import Homepage from './pages/Homepage';


function App() {
  return (
    <ChakraProvider>
      <RouterProvider />
    </ChakraProvider>
  );
}

export default App;
