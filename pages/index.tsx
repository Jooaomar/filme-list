import Fundo from './components/Layout'
import { Button, Heading, Box, Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack, Stack, Text,
  Card, CardHeader, CardBody, CardFooter,
  ButtonGroup,

} from '@chakra-ui/react'
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Flex
} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import { StackDivider } from '@chakra-ui/react';

import { useEditableControls } from '@chakra-ui/react';

import Link from 'next/link'
import type { NextPage } from "next";
import styles from "./index.module.css";
import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react'

import Item from './Item';

export default function Home() {

    const [items, setItems] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        handleListItems();
    }, []); // chama a função apenas na primeira renderização
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleSubmit = async () => {
        // const nome = initialRef.current.value;
        const descricao = document.getElementById('descricao').value;
        const responsavel = document.getElementById('responsavel').value;
        const nivel = document.getElementById('nivel').value;
        const situacao = document.getElementById('situacao').value;
        const prioridade = document.getElementById('prioridade').value;
        const data = {
            responsavel: responsavel,
            descricao: descricao,
            nivel: nivel,
            situacao: situacao,
            prioridade: prioridade
        };
        await axios.post('http://0.0.0.0:8080/adicionar/', data);
        onClose();

        // Atualiza a lista de itens com os novos dados submetidos
        const response = await axios.get('http://0.0.0.0:8080/filmes');
        setItems(response.data);
    };

    const handleListItems = async () => {
        const response = await axios.get('http://0.0.0.0:8080/filmes');
        setItems(response.data);
    };

    // Editar
    
    

  return (
    <>
      <div className={styles.desktopParent}>
      <main className={styles.desktop}>
        <div className={styles.card} />
        <div className={styles.desktopChild}>
            <Card>
            <CardHeader>
              <Heading size='md'>Lista</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                
                {items.map((item) => {
                  const parsedItem = JSON.parse(item); // Parse o JSON para objeto JavaScript
                  return (
                    // <Box>
                    //   <Heading size='xs' textTransform='uppercase'>
                    //     {parsedItem.responsavel}
                    //   </Heading>
                    //   <Text pt='2' fontSize='sm'>
                    //     {parsedItem.descricao}
                        
                    //     <Editable
                    //     fontSize='2xl'
                    //     isPreviewFocusable={false}
                    //     >
                    //       <EditablePreview />
                    //       {/* Here is the custom input */}
                    //       <Input as={EditableInput} />
                    //       <EditableControls />
                    //     </Editable>
                    //   </Text>
                      
                    // </Box>
                    <Item parsedItem={parsedItem} />
                  );
                })}
              </Stack>
            </CardBody>
          </Card>
        </div>
        <div className={styles.meusFilmes}>Meus Filmes</div>
        <Button
          onClick={onOpen}
          className={styles.inputPlus}
          variant="ghost"
          w="66px"
          colorScheme="teal"
        >
          Add
        </Button>
        <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Adicione seu filme</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Responsável</FormLabel>
                            <Input id='responsavel' ref={initialRef} placeholder='Responsavel' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Descrição</FormLabel>
                            <Input id='descricao' placeholder='Descrição' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Nível</FormLabel>
                            <NumberInput id='nivel' defaultValue={1} min={1} max={5}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Situação</FormLabel>
                            <Input id='situacao' placeholder='Descrição' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Prioridade</FormLabel>
                            <NumberInput id='prioridade' defaultValue={1} min={1} max={3}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                        Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
        </Modal>
        
      </main>
    </div>
    </>
  )
}
