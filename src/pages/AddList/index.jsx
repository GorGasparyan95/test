import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocalStorage } from '../../hooks'
import { VStack, Flex, Button, Text, useToast } from '@chakra-ui/react'
import { InputField } from '../../components/InputField'
import { useNavigate } from 'react-router-dom'

const AddList = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { put, get } = useLocalStorage()
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState(get("lists") ?? [])
  const toast = useToast()
  const navigate = useNavigate()

  const submit = ((data) => {
    if (list.length !== 0 && list.filter((list) => list.id === data.id).length > 0) {
      setLoading(false)
      toast({
        title: "an id is already exist",
        status: 'error',
        duration: 2000,
        position: 'bottom',
      })
    } else {
      setLoading(true)
      list.push(data)
      put("lists", list)
      setLoading(false)
      navigate('/lists')

    }
  })

  return (
    <>
      <Button
        onClick={() => navigate("/")}
        variant="solid"
        colorScheme="green"
        m="5">
        Home
      </Button>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Text
          pt="20px"
          fontSize="25px"
          fontWeight="bold"
          color="pink.400">ADD A LIST</Text>
        <Flex
          justifyContent="center"
          alignItems="center"
          h="80vh">
          <form noValidate onSubmit={handleSubmit(submit)}>
            <VStack spacing={3}>
              <InputField
                isInvalid={!!errors.Id}
                label='ID'
                {...register('id', { required: true })}
                type="number"
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
                CREATE
              </Button>
            </VStack>
          </form>
        </Flex>
      </Flex>
    </>
  )
}

export default AddList