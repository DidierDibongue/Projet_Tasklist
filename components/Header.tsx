import { Flex,Heading,Text, Input, Button } from '@chakra-ui/react'

import React from 'react'

const Header = () => {
  return (
    <Flex p="2rem" direction="column" alignItems="center">
        <Heading as='h1' size='4xl' lineClamp={1} 
        className="tasklist-title">
            Todo List
        </Heading>
        <Text mt="1rem" className="tasklist-slogan">
            N'hésitez pas à vous en servir !
        </Text>
    </Flex>
  )
}

export default Header
