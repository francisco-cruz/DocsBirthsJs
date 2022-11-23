import {
  Box,
  Heading,
  Flex,
  List,
  Link,
  Text,
} from "@chakra-ui/react";


const Footer = () => {
  return (
    <Box
      as="footer"
      bg="#1A202C"
      borderTop="1px solid"
      borderColor="#ffffff30"
      py="2.5rem"
      fontSize="0.875rem"
    >
      <Box
        maxW="64rem"
        marginX="auto"
        pb="2rem"
        mb="1.5rem"
        px={{ base: "1rem", lg: "0" }}
        borderBottom="1px solid"
        borderColor="#ffffff20"
      >
        <Flex justify="center" flexWrap="wrap" alignItems="start">
          <Box w={{ base: "100%", lg: 1 / 4 }} mb={{ base: "1.5rem", lg: "0" }}>
            <Heading
              as="h5"
              color="#61DAFB"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              Links
            </Heading>
            <List lineHeight="2" display="flex" flexDir="column" color="gray.500" fontWeight={600}>
              <Link textDecoration="underline" href="https://github.com/francisco-cruz/BirthsJS" isExternal>GitHub</Link>
              <Link href="https://www.npmjs.com/package/birthsjs" isExternal>NPM</Link>
            </List>
          </Box>
          <Box w={{ base: "100%", lg: 1 / 4 }} mb={{ base: "1.5rem", lg: "0" }}>
            <Heading
              as="h5"
              color="#61DAFB"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              Developer
            </Heading>
            <List lineHeight="2" display="flex" flexDir="column" color="gray.500" fontWeight={600}>
              <Link href="https://github.com/francisco-cruz" isExternal>GitHub</Link>
              <Link href="https://ciscoportifolio.netlify.app/" isExternal>Portifolio</Link>
              <Link href="https://www.instagram.com/ui_cisco/" isExternal>Instagram</Link>
            </List>
          </Box>
        </Flex>
      </Box>
      <Flex
        maxW="64rem"
        mx="auto"
        alignItems="center"
        px={{ base: "1rem", lg: "0" }}
      >
        <Text color="gray.600" fontSize="0.875rem" pl="0.5rem">
          &copy; 2022 BirthsJS.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
