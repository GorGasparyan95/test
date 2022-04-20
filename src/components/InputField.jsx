import * as React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  useColorModeValue as mode
} from '@chakra-ui/react'


export const InputField = React.forwardRef((props, ref) => {
  const {
    label,
    isInvalid,
    errorMessage,
    ...rest
  } = props
  return (
    <FormControl >
      <FormLabel
        fontSize="14px"
        fontWeight="bold"
        color="teal"
      >
        {label}
      </FormLabel>
      <Input
        minW="350px"
        _hover={{ borderColor: 'blue.300' }}
        _focus={errorMessage ? '' : { borderColor: 'blue.300' }}
        isInvalid={isInvalid}
        border='1px solid blue'
        ref={ref}
        fontSize="lg"
        {...rest}

      />
      {isInvalid && (
        <Text
          p="5px"
          fontSize='16px'
          color='red.600'

        >
          {errorMessage}
        </Text>
      )}
    </FormControl>
  )
})

