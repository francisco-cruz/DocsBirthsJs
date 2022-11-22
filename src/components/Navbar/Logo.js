import React from "react";
import { Box, Image, Link } from "@chakra-ui/react";
import Logos from '../../assets/img/logo.png'

export default function Logo(props) {
  return (
    <Box {...props} pos="absolute" left='16px'>
      <Link to="/">
        <Image src={Logos} boxSize="45px" objectFit="cover" alt="Logo" />
      </Link>
    </Box>
  );
}
