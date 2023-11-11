import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";

const SafeTable = ({ children }) => {
  return (
    <TableContainer mt="0.5rem" mb="2rem">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th textAlign="center" w="12rem">
              SAFE ID
            </Th>
            <Th textAlign="center" w="23rem">
              OWNER
            </Th>
            <Th textAlign="center" w="24rem">
              COLLATERAL
            </Th>
            <Th textAlign="center">DEBT</Th>
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default SafeTable;
