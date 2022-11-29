import { Flex, Stack, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Nav from "./Nav";
import Logo from "./Navbar/Logo";

export default function Sidebar() {
  const [isSmallerThan900] = useMediaQuery("(max-width: 767px)");

  return (
    <>
      <Flex
        display={isSmallerThan900 ? "none" : "block"}
        position="sticky"
        top="0"
        left="0"
        flexDir="column"
        justifyContent="space-between"
        h="100vh"
        minW="250px"
        bg="transparent"
      >
        <Stack
          position="fixed"
          left="250px"
          bg="#ffffff30"
          h="100vh"
          w="1px"
        ></Stack>
        <Flex
          pl="16px"
          pt="7px"
          h="auto"
          flexDir="column"
          alignItems="flex-start"
          as="header"
        >
          <Logo />
        </Flex>
        <Stack mt="70px">
          <Text color="#61DAFB" fontWeight={600} ml="25px">
            Getting Started
          </Text>
          <Nav />
        </Stack>
      </Flex>
    </>
  );
}
