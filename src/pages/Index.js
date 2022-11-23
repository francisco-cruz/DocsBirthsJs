// import HeaderIndex from "../components/HeaderIndex";
import { Flex, Image, Stack, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import "../assets/styles/index.css";
import Header from '../components/Header'
export default function Index() {
  const [isSmallerThan767] = useMediaQuery("(max-width: 767px)");
  return (
    <>
      <Header />
      <Stack
        w="100%"
        h="100%"
        px={isSmallerThan767 ? "16px" : "32px"}
        py="64px"
        position="relative"
        bg="red"
      >
        <Flex>
          <Image></Image>
        </Flex>

      </Stack>
    </>
  );
}
