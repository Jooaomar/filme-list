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
        <ButaoAdicionar/>
      </Fundo>
    </>
  )
}
