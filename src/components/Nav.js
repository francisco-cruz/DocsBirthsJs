import { Flex, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function Nav() {
  return (
    <Stack bg="tranparent" py={4}>
      {NAV_ITEMS.map((navItem) => (
        <NavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}

const NavItem = ({ label, src }) => {
  return (
    <Stack
      spacing={4}
      display="flex"
      flexDir="row-reverse"
      justifyContent="start"
      _hover={{
        backgroundColor: "#61DAFB40",
      }}
    >
      <Flex
        py={1}
        as={Link}
        href={src ?? "#"}
        justify={"space-between"}
        align={"center"}
        w="100%"
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
    label: "Installation",
    src: "/docs/installation",
  },
  {
    label: "Components",
    src: "/docs/components",
  },
];
