import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { LinerOptions } from "../components/LinerOptions";
import { NavBar } from "../components/NavBar";
import { PackageDetails } from "../components/PackageDetails";
import { PoolCard } from "../components/PoolCard";
import { Pools } from "../components/Pools";
import { content, Manufacturer } from "../data/content";
import Head from "next/head";
import { PoolPics } from "../components/PoolPics";

const Index = () => {
  const url = "https://aroundpools.ca";
  // const ogImg = "/images/facebook-abovegrounds.jpg";
  return (
    <>
      <Head>
        <title>Above Ground Pools Canada</title>
        <meta name="title" content="Above Ground Pools Canada" />
        <meta
          name="description"
          content="Canada's best selection of above ground pools for the lowest price. On Sale now. Proudly serving Canadians for 40 years. Call (519) 636-3123."
        />
        <meta name="keywords" content="pool, heaters, canada" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content="Above Ground Pools Canada" />
        <meta
          property="og:description"
          content="Canada's best selection of above ground pools for the lowest price. On Sale now. Proudly serving Canadians for 40 years. Call (519) 636-3123."
        />
        <meta
          property="og:image:secure"
          content="/images/facebook-abovegrounds.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content="Above Ground Pools Canada" />
        <meta
          property="twitter:description"
          content="Canada's best selection of above ground pools for the lowest price. On Sale now. Proudly serving Canadians for 40 years. Call (519) 636-3123."
        />
        <meta
          property="twitter:image"
          content="/images/facebook-abovegrounds.jpg"
        />
      </Head>
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
          src="/images/poolsCanadaHeroBanner.jpg"
          alt="Pools canada hero"
          boxShadow="md"
        />
        <Flex
          w={["100%", "100%", "100%", "100%"]}
          margin={["10px auto", "10px auto", "10px auto", "20px auto"]}
          justifyContent="center"
        >
          <Pools />
        </Flex>
        <Box
          maxW="80%"
          margin={["50px auto"]}
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
          w={["100%", "100%", "80%", "80%"]}
          margin="auto"
          justify="center"
          mt="40px"
          backgroundColor="white"
          borderRadius="5px"
          p={["5px", "0", "10px", "10px"]}
          bgColor="gray.200"
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
        <Box
          w={["95%", "90%", "90%", "90%"]}
          margin="auto"
          justify="center"
          mt="40px"
          backgroundColor="white"
          borderRadius="5px"
          boxShadow="lg"
          p={["0", "0", "10px", "10px"]}
        >
          {/* <Text
            w="100%"
            textAlign="center"
            color="black"
            fontSize="24px"
            fontWeight="bold"
            mb="20px"
          >
            Some of Our Work
          </Text> */}
          <PoolPics />
        </Box>
        <Footer />
        <Box w="100%" h="400px"></Box>
      </Box>
    </>
  );
};

export default Index;
