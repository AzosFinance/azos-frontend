import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";

const VaultsTable = ({ children }) => {
  return (
    <TableContainer mt="0.5rem" mb="2rem">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>VAULT ID</Th>
            <Th>OWNER</Th>
            <Th>DEBT</Th>
            <Th>COLLATERAL</Th>
            <Th>COLLATERAL RATIO</Th>
            <Th>LIQUIDATION</Th>
            <Th>LTV</Th>
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default VaultsTable;
