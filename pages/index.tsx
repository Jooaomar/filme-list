import Fundo from './components/Layout'
import { Button, Heading, Box } from '@chakra-ui/react'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Fundo>
        <Box textAlign="center" mb="8">
          <Heading as="h1" size="2xl">
            Listas de Filmes
          </Heading>
        </Box>
        <Box
          bgGradient="linear(to-r, blue.100, teal.300)"
          boxShadow="xl"
          borderRadius="md"
          w="90%"
          p="8"
        >
          <Box textAlign="center">
            <Link href="app">
              <Button  colorScheme="blue" size="lg">
                Iniciar
              </Button>
            </Link>
          </Box>
        </Box>
      </Fundo>
    </>
  )
}
