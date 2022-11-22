import {
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
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

const Nav = () => {
  return (
    <Stack bg="#333">
      {NAV_ITEMS.map((navItem) => (
        <NavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const NavItem = ({ label, href }) => {
  return (
    <Stack
      spacing={4}
      py={1}
      display="flex"
      flexDir="row-reverse"
      justifyContent="start"
      _hover={{
        backgroundColor: "#61DAFB40",
      }}
    >
      <Flex
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          ml="25px"
          fontWeight={400}
          fontSize="15px"
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Instalation",
    href: "#",
  },
  {
    label: "Components",
    href: "#",
  },
  {
    label: "How use",
    href: "#",
  },
];
