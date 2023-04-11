import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Center } from "@chakra-ui/react";
// import { Wrap, WrapItem } from "@chakra-ui/react";
import { StackDivider } from "@chakra-ui/react";

function Fundo({children}) {
  return (
      <Box bg="blue.100" minHeight="100vh" display="flex" alignItems="center" justifyContent="center">
        
        <Box bg="white" w="50%" minHeight="100vh">

          {children}
        </Box>
      </Box>
  );
}

export default Fundo;
