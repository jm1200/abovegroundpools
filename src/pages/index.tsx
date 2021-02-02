import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { LinerOptions } from "../components/LinerOptions";
import { NavBar } from "../components/NavBar";
import { PackageDetails } from "../components/PackageDetails";
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
        <Flex
          w={["100%", "100%", "100%", "80%"]}
          margin={["10px auto", "10px auto", "10px auto", "-20px auto"]}
          justifyContent="center"
        >
          <Pools />
        </Flex>
        <Box
          maxW="80%"
          margin={["50px auto", "100px auto"]}
          justify="center"
          backgroundColor="white"
          borderRadius="5px"
          p="5px"
          boxShadow="lg"
        >
          <Text
            fontSize={["20px", "20px", "36px", "40px"]}
            fontWeight="bold"
            color="#102324"
            fontFamily="serif"
            textAlign="center"
          >
            For more info or to purchase a pool call (519) 636-3123
          </Text>
        </Box>
        <Box
          w={["95%", "100%", "80%", "80%"]}
          margin="auto"
          justify="center"
          mt="40px"
          backgroundColor="white"
          borderRadius="5px"
          boxShadow="lg"
          p={["0", "0", "10px", "10px"]}
        >
          <PackageDetails />
        </Box>
        <Box
          w={["95%", "100%", "50%", "50%"]}
          margin="auto"
          justify="center"
          mt="40px"
          backgroundColor="white"
          borderRadius="5px"
          boxShadow="lg"
          p={["0", "0", "10px", "10px"]}
        >
          <LinerOptions />
        </Box>
        <Footer />
        <Box w="100%" h="400px"></Box>
      </Box>
    </>
  );
};

export default Index;
