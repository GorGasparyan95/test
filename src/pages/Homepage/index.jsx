import React from "react";
import { Button, Flex, VStack } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate()
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <VStack spacing={10}>
        <Button
          onClick={() => navigate('/lists')}
          height='60px'
          width='200px'
          colorScheme='pink'
          variant='solid'>
          LISTS
        </Button>
        <Button
          onClick={() => navigate('/create')}
          height='60px'
          width='200px'
          colorScheme='teal'
          variant='solid'>
          ADD LIST
        </Button>
      </VStack>
    </Flex>
  )
}

export default Homepage