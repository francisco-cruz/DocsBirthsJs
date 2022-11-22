import {
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
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
        borderEnd="1px solid #ffffff20"
        justifyContent="space-between"
        boxShadow="0 4px 12px 0 rgba( 0, 0, 0, 0.05)"
        h="100vh"
        w="250px"
        bg="transparent"
      >
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
          <Text
          color="#61DAFB"
          fontWeight={600}
          ml="25px"
          >Getting Started</Text>
          <Nav />
        </Stack>
      </Flex>
    </>
  );
}
