
import React from "react";
import { VStack, Box, Flex, Button, useDisclosure, HStack } from "@chakra-ui/react";
import ModalEdit from "./ModalEdit";
import { useLocalStorage } from "../hooks";


const List = ({ list, lists, setLists }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { put } = useLocalStorage()

  const deleteList = () => {
    const deleteList = lists.filter((item) => item.id !== list.id)
    setLists(deleteList)
    put("lists", deleteList)
  }
  return (
    <>
      <ModalEdit
        onClose={onClose}
        isOpen={isOpen}
        list={list}
        lists={lists}
        setLists={setLists} />
      <Box
        borderRadius="8px"
        boxShadow="0 0 24px 4px rgba(0, 0, 0, 0.15)"
        h="160px"
      >
        <Flex justifyContent="center" alignItems="center">
          <VStack spacing={2} p="5px">
            <Box fontWeight="semibold" as="h4" lineHeight="tight">
              Id: {list.id}
            </Box>
            <Box fontWeight="semibold" as="h4" lineHeight="tight">
              Name: {list.name}
            </Box>
            <Box fontWeight="semibold" as="h4" lineHeight="tight">
              Age: {list.age}
            </Box>
            <HStack spacing={5} >
              <Button
                maxW="100px"
                h="30px"
                variant="solid"
                colorScheme="pink"
                onClick={onOpen}>
                Edit
              </Button>
              <Button
                maxW="100px"
                h="30px"
                variant="solid"
                colorScheme="teal"
                onClick={deleteList}>
                Delete
              </Button>
            </HStack>
          </VStack>
        </Flex>
      </Box >
    </>
  )
}

export default List