import { Inter } from 'next/font/google'
import Fundo from './components/Layout'
import ButaoAdicionar from './components/ButaoAdicionar'
import { Box } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { StackDivider } from '@chakra-ui/react'


const inter = Inter({ subsets: ['latin'] })


export default function App() {
  return (
    <>
      <Fundo>
        <VStack 
          spacing={2}
          align='stretch'
          marginLeft="2"
          marginRight="2"
        >
          <Box h='40px' bg='yellow.200'>
            {/* Item 1 */}
          </Box>
          <Box h='40px' bg='yellow.200'>
            {/* Item 2 */}
          </Box>
        </VStack>
        <ButaoAdicionar/>
      </Fundo>
    </>
  )
}
