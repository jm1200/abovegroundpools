import { Stack, Box } from "@chakra-ui/react";
import { content, Manufacturer } from "../data/content";

import { PoolCard } from "./PoolCard";

interface PoolsProps {}

export const Pools: React.FC<PoolsProps> = ({}) => {
  const manufacturesArray = Object.keys(content.manufacturers).map(
    (manufacturer) => content.manufacturers[manufacturer as Manufacturer]
  );
  return (
    <Stack spacing={8} px={5}>
      {manufacturesArray.map((manufacturer) => {
        return (
          <Box key={manufacturer.cardImgSrc}>
            <PoolCard
              imgAltText={manufacturer.cardImgAltText}
              src={manufacturer.cardImgSrc}
              poolData={manufacturer.pools}
              chartTitle={manufacturer.manufacturer}
            />
          </Box>
        );
      })}
    </Stack>
  );
};
