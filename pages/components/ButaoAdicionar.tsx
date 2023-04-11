import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    Input,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    VStack,
    Box
  } from '@chakra-ui/react'

import Link from 'next/link'
import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react';




export default function ButaoAdicionar() {
    const [items, setItems] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
  
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
  
    return (
        <>
            <Button onClick={handleListItems}>Listar Itens</Button>

            <VStack
                spacing={2}
                align='stretch'
                marginLeft='2'
                marginRight='2'
            >
                {items.map((item) => {
                    const parsedItem = JSON.parse(item); // Parse o JSON para objeto JavaScript
                    return (
                        <Box key={parsedItem.id} h='40px' bg='yellow.200'>
                            <p>{parsedItem.descricao}</p>
                            <p>{parsedItem.responsavel}</p>
                        </Box>
                    );
                })}
            </VStack>


            <Button onClick={onOpen}>Adicionar</Button>
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
        </>
    );
  }