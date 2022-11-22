import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import Nav from "../Nav";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [isSmallerThan900] = useMediaQuery("(max-width: 767px)");

  return (
    <Box display={isSmallerThan900 ? "block" : "none"}>
      <Flex
        display="flex"
        flexDir="row-reverse"
        bg="#333333"
        color={useColorModeValue("gray.600", "white")}
        minH={"70px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={isOpen ? "1px solid transparent" : "1px solid #ffffff20"}
        align={"center"}
        in={isOpen}
        animateOpacity
      >
        <Flex
          flex={{ base: 0, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          justifyContent="space-between"
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Logo />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Nav />
      </Collapse>
    </Box>
  );
}
