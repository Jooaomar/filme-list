import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function Fundo({children}) {
  return (
    <Box bg="blue.100" minHeight="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box bg="white" w="50%" p="8">
        {/* conteúdo da caixa */}
        {children}
      </Box>
    </Box>
  );
}

export default Fundo;
