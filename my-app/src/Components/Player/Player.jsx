import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import './Player.css'
const Player = ({xPlaying,score}) => {
  return (
    <Box mb='20px' boxShadow='2px 5px 15px skyblue' borderRadius='10px' p='10px' >
<Flex justify='space-around'>    
<Box className={`Box ${xPlaying && 'X'}`}>X-{score.xScore}</Box>
<Box className={`Box ${!xPlaying && 'O'}`}>O-{score.oScore}</Box>
</Flex>        
    </Box>
  )
}

export default Player