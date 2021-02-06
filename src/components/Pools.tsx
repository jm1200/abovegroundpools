import { Stack, Box, SimpleGrid } from "@chakra-ui/react";
import { content, Manufacturer } from "../data/content";
import { HeaterCard } from "./HeaterCard";

import { PoolCard } from "./PoolCard";

interface PoolsProps {}

export const Pools: React.FC<PoolsProps> = ({}) => {
  const manufacturesArray = Object.keys(content.manufacturers).map(
    (manufacturer) => content.manufacturers[manufacturer as Manufacturer]
  );
  return (
    <SimpleGrid spacing={8} columns={[1, 1, 1, 2]}>
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
      <HeaterCard />
    </SimpleGrid>
  );
};
