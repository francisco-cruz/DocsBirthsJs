import { Flex, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function Nav() {
  return (
    <Stack bg="#333">
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
    src: "docs/instalation",
  },
  {
    label: "Components",
    src: "docs/components",
  },
  {
    label: "How use",
    src: "docs/howuse",
  },
];
