import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";

const SafeTable = ({ children }) => {
  return (
    <TableContainer mt="0.5rem" mb="2rem">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>SAFE ID</Th>
            <Th>OWNER</Th>
            <Th>COLLATERAL</Th>
            <Th>DEBT</Th>
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default SafeTable;
