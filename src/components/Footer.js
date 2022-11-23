import {
  Box,
  Heading,
  Flex,
  List,
  ListItem,
  Link,
  Text,
} from "@chakra-ui/react";

const LinkItem = ({ text, isTag = false, tagText }) => {
  return (
    <ListItem display="flex">
      <Link fontWeight="600" href="#" color="rgba(113, 128, 150, 1)">
        {text}
      </Link>
      {isTag && (
        <Text
          as="span"
          bg="#008F94"
          px="0.25rem"
          display="inline-flex"
          alignItems="center"
          color="#fff"
          height="1.25rem"
          borderRadius="0.25rem"
          ml="0.25rem"
          mt="0.25rem"
          fontSize="0.75rem"
        >
          {tagText}
        </Text>
      )}
    </ListItem>
  );
};
const Footer = () => {
  return (
    <Box
      as="footer"
      bg="#1A202C"
      borderTop="1px solid"
      borderColor="#ffffff50"
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
        <Flex justify="start" flexWrap="wrap" alignItems="start">
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
              <Link href="https://github.com/francisco-cruz/BirthsJS" isExternal>GitHub</Link>
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
              <Link href="https://www.instagram.com/ui_cisco/" isExternal>GitHub</Link>
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
