import { Flex, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { PoolData } from "../data/content";

interface PriceTableProps {
  poolData: PoolData[];
  chartTitle: string;
}

export const PriceTable: React.FC<PriceTableProps> = ({
  poolData,
  chartTitle,
}) => {
  return (
    <Flex
      w="100%"
      // minWidth="280px"
      minH={["auto", "100%"]}
      display="block"
      bgColor="gray.800"
      borderTopRightRadius={["0", "5px"]}
      borderBottomRightRadius={["5px"]}
      borderTopLeftRadius={["0"]}
      borderBottomLeftRadius={["5px", "0"]}
    >
      <Text
        w="100%"
        textAlign="center"
        color="white"
        p="5px"
        fontSize="14px"
        fontWeight="bold"
      >
        {chartTitle}'s Pools
      </Text>
      <Table w="100%" size="sm">
        {/* <TableCaption>* Millivolt Standing Pilot Model</TableCaption> */}
        <Thead>
          <Tr>
            <Th textAlign="center">Thermal Units</Th>
            <Th textAlign="center">Model</Th>
            <Th textAlign="center">Price</Th>
          </Tr>
        </Thead>

        <Tbody color="gray.100">
          {poolData.map((pool) => (
            <Tr key={pool.size}>
              <Td textAlign="center">{pool.shape}</Td>
              <Td textAlign="center">{pool.size}</Td>
              <Td textAlign="center">{pool.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};
