import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";

const SafeTable = ({ children }) => {
  return (
    <TableContainer mt="0.5rem" mb="2rem">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th textAlign="center">SAFE ID</Th>
            <Th textAlign="center">OWNER</Th>
            <Th textAlign="center">COLLATERAL</Th>
            <Th textAlign="center">DEBT</Th>
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default SafeTable;
