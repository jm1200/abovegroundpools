import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { PoolCard } from "../components/PoolCard";
import { Pools } from "../components/Pools";
import { content, Manufacturer } from "../data/content";

// import Head  from 'next/head'

const Index = () => {
  return (
    <>
      {/* TODO HEAD */}
      <Box
        position="relative"
        bgColor="gray.200"
        w="100%"
        minH="100vh"
        margin="auto"
      >
        <NavBar />
        <Image
          w="100%"
          pt={["0", "0", "0", "70px"]}
          src="/images/poolsCanadaHeroBanner.png"
          alt="Pools canada hero"
        />
        <Flex w="80%" margin="auto" justifyContent="center">
          <Pools />
        </Flex>
        <Footer />
      </Box>
    </>
  );
};

export default Index;
