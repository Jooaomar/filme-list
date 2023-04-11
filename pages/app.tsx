import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Fundo from './components/Layout'
import ButaoAdicionar from './components/ButaoAdicionar'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Fundo>
        <h1>Olá</h1>
        <ButaoAdicionar/>
      </Fundo>
    </>
  )
}
