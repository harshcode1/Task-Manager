import React from 'react'
import { Heading, Box, Text, Flex,Button, Stack} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <>
    <Box as='section' bg='gray' color='white' pt='90px' pb='200px' >
      <Heading textAlign='center' fontWeight='800' fontSize='48px'>Simple Pricing for you Business</Heading>
      <Text textAlign='center' fontWeight='500' fontSize='24px'>Plans that are carefully crafted to suit your Business</Text>
    </Box>
    <Box>
    <Flex>
      <Box>
      <Text fontSize='24px' fontWeight='800'>Premium PRO</Text>
      <Heading as='h3' fontSize='60px'>$329</Heading>
      <Text fontSize='18px' fontWeight='500'>billed just once</Text>
      <Button mt='8px' colorScheme='purple' size='lg'>Get Started</Button>
      </Box>
      <Box>
      <Text>Access these features when you get this pricing package business.</Text>
      <Stack as='ul'>
        <Text>International calling and messaging APP</Text>
        <Text>International calling and messaging APP</Text>
        <Text>International calling and messaging APP</Text>
        <Text>International calling and messaging APP</Text>
      </Stack>
      </Box>
    </Flex>
    </Box>
    </>
  )
}    

export default Navbar
