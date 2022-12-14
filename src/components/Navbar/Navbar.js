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
    <Box
      display={isSmallerThan900 ? "block" : "none"}
      borderBottom={"1px solid #ffffff20"}
      align={"center"}
    >
      <Flex
        display="flex"
        flexDir="row-reverse"
        bg="#1A202C"
        color={useColorModeValue("gray.600", "white")}
        minH={"70px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        in={isOpen}
        animateOpacity
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
            _active={{
              backgroundColor: "#ffffff20"
             }}
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
