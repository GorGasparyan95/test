import React, { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  list
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { InputField } from './InputField'
import { useLocalStorage } from '../hooks'
import { useNavigate } from 'react-router'

const ModalEdit = ({ list, onClose, isOpen, lists, setLists }) => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      id: list.id,
      name: list.name,
      age: list.age,

    }
  })
  const [loading, setLoading] = useState(false)
  const { put } = useLocalStorage()
  const submit = ((data) => {
    try {
      setLoading(true)
      const editedIndex = lists.findIndex((list) => list.id === data.id)
      lists[editedIndex] = { ...data }
      put("lists", lists)
      setLoading(false)
      navigate('/')
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  })

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit List</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form noValidate onSubmit={handleSubmit(submit)}>
              <VStack spacing={3}>
                <InputField
                  isInvalid={!!errors.Id}
                  label='ID'
                  {...register('id', { required: true })}
                  type="number"
                  disabled={true}
                />
                <InputField
                  isInvalid={!!errors.name}
                  label="NAME"
                  errorMessage="Alphabetical characters only"
                  {...register('name', { required: true, pattern: /^[A-Za-z]+$/i })}
                />
                <InputField
                  isInvalid={!!errors.age}
                  label="AGE"
                  errorMessage="You must be older then 8 and younger then 100"
                  {...register('age', { required: true, min: 8, max: 99 })}
                  type="number" />
                <Button
                  isLoading={loading}
                  type="submit"
                  colorScheme="pink"
                  variant="solid">
                  SAVE
                </Button>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalEdit