import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../components/Navbar/Logo";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box borderBottom={"1px solid #ffffff20"}>
      <Flex
        bg="#1A202C"
        color={useColorModeValue("gray.600", "white")}
        display="flex"
        flexDir="row-reverse"
        minH={"70px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            pos="absolute"
            right="20px"
            top="15px"
            onClick={onToggle}
            color="white"
            _hover={{
             backgroundColor: "#ffffff20"
            }}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "end", md: "end" }}>
          <Logo />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.src ?? "#"}
            fontSize={"sm"}
            fontWeight={500}
            color="#ffffff90"
            _hover={{
              textDecoration: "none",
              color:"#ffffff",
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack

      py={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, src }) => {
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
        py={1}
        w="100%"
        href={src ?? "#"}
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
          color={useColorModeValue("white.600", "white.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Docs",
    src: "/docs/installation",
  },
  {
    label: "Examples",
    src: "/examples",
  },
];
