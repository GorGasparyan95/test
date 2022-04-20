import React, { useState } from 'react'
import { Box, SimpleGrid, Flex, Text, Button } from '@chakra-ui/react'
import { useLocalStorage } from '../../hooks'
import List from '../../components/List'
import { useNavigate } from 'react-router-dom'



const Lists = () => {
  const { get } = useLocalStorage()
  const [lists, setLists] = useState(get("lists"))
  const navigate = useNavigate()

  return (
    <>
      <Button
        onClick={() => navigate("/")}
        variant="solid"
        colorScheme="green"
        m="5">
        Home
      </Button>
      <Flex justifyContent="center" alignItems="center">
        <Text
          p={5}
          fontSize="30px"
          color="teal"
          fontWeight="bold">LISTS</Text>
      </Flex>
      <Box p={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
          {lists.map((list) =>
            <Box key={list.id}>
              <List
                list={list}
                lists={lists}
                setLists={setLists} />
            </Box>
          )}
        </SimpleGrid>
      </Box>
    </>
  )
}

export default Lists