import React from "react";
import { Box, Image, Link } from "@chakra-ui/react";
import logo from '../../assets/img/logo.png'

export default function Logo(props) {
  return (
    <Box {...props} pos="absolute" left='20px' top="15px">
      <Link to="/">
        <Image src={logo} boxSize="40px" objectFit="cover" alt="Logo" />
      </Link>
    </Box>
  );
}
