import React from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { Stack, Flex, Image } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

const Header = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      direction={"row"}
      padding={6}
      bg="transparent"
      color="white"
      {...props}
    >
      <Stack align="start">
      <Link to="/">
        <Image src={Logo} boxSize="50px" objectFit="cover" alt="Logo" />
      </Link>
      </Stack>

      <Stack direction={"row"} alignItems={"end"} width="80%" justify={"end"} spacing={5} color="#ffffff85">
        <Link to="/docs">Docs</Link>
        <Link to="/examples">Examples</Link>
      </Stack>

      <SunIcon />
    </Flex>
  );
};

export default Header;

