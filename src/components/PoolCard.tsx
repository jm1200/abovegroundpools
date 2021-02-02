import { Box, Image, Stack, Img } from "@chakra-ui/react";
import React from "react";
import { PoolData } from "../data/content";
import { PriceTable } from "./PriceTable";

interface IPoolCardProps {
  src: string;
  imgAltText: string;
  poolData: PoolData[];
  chartTitle: string;
}

export const PoolCard: React.FC<IPoolCardProps> = ({
  src,
  imgAltText,
  poolData,
  chartTitle,
}) => {
  return (
    <Stack direction={["column", "column", "row"]} spacing="0" boxShadow="lg">
      <Img
        boxSize={["100%"]}
        objectFit="cover"
        src={src}
        alt="Segun Adebayo"
        borderTopRightRadius={["5px", "0"]}
        borderBottomRightRadius={["0"]}
        borderTopLeftRadius={["5px"]}
        borderBottomLeftRadius={["0", "5px"]}
      ></Img>
      <Box>
        <PriceTable poolData={poolData} chartTitle={chartTitle} />
      </Box>
    </Stack>
  );
};
