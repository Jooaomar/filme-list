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
    NumberDecrementStepper
  } from '@chakra-ui/react'

import Link from 'next/link'
import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import axios from 'axios'


export default function ButaoAdicionar() {
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
        await axios.post('http://0.0.0.0:8000/adicionar/', data);
        onClose();
      };
  
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>
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

                        {/* <FormControl mt={4}>
                            <FormLabel>Nível</FormLabel>
                            <Input id='descricao' placeholder='Descrição' />
                        </FormControl> */}
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