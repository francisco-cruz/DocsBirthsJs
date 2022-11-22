import { Flex, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  return (
    <>
      <Flex
        position="sticky"
        left={5}
        marginTop="2.5vh"
        flexDir="column"
        justifyContent="space-between"
        boxShadow="0 4px 12px 0 rgba( 0, 0, 0, 0.05)"
        h="95vh"
        w={navSize === "small" ? "75px" : "200px"}
        bg="white"
      >
        <Flex p="5%" flexDir="column" alignItems="flex-start" as="nav">
          <IconButton
            mt={5}
            _hover={<HamburgerIcon />}
            onClick={() => {
              navSize === "small"
                ? changeNavSize("large")
                : changeNavSize("small");
            }}
          />
        </Flex>
      </Flex>
    </>
  );
}
