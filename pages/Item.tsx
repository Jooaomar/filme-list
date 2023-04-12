import { useState } from "react";
import { Box, Heading, Text, Editable, EditableInput, EditablePreview, useEditableControls, Input, IconButton } from "@chakra-ui/react";
import axios from "axios";

import { ButtonGroup } from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";

import { Flex } from "@chakra-ui/react";




export default function Item({ parsedItem }) {
  
  // Recebe os dados [parsedItem] para editar
  // Crie uma conexão com a api atraves do axios no caminho 'http://localhost:8080/editar'

  return (
    <Box>
      <Heading size="xs" textTransform="uppercase">
        {parsedItem.responsavel}
      </Heading>
      <Text pt="2" fontSize="sm" style={{ display: "flex", alignItems: "center" }}>
        {parsedItem.descricao}
        {/* {preciso de um modal aqui onde aparece doisposso escolher editar ou excluir com icones } */}
      </Text>
    </Box>
  );
}
