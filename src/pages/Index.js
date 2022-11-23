// import HeaderIndex from "../components/HeaderIndex";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Heading, Stack, Link, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import "../assets/styles/index.css";
import Header from "../components/Header";

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
        display="flex"
        flexDir="column"
        alignItems={isSmallerThan767 ? "start" : "center"}
      >
        <Heading fontSize={isSmallerThan767 ? "32px" : "56px"}>
          Validate dates of birth
        </Heading>
        <Heading fontSize="22px" color="#ffffff95" fontWeight={400}>
          With Births it is possible to validate birth dates with just one
          component.
        </Heading>
        <Stack direction="row" justifyContent="center" w="100%" spacing={4} pt={8}>
          <Link to='/docs/installation'>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="blue"
            >
              Documentation
            </Button>
          </Link>

          <Link
            href="https://github.com/francisco-cruz/BirthsJS.git"
            isExternal
          >
            <Button
              rightIcon={<ExternalLinkIcon />}
              colorScheme="teal"
              variant="outline"
            >
              GitHub
            </Button>
          </Link>
        </Stack>
        <Stack w="100%" maxW="600px" pt={10}>
          <pre>
            <code>
              <div>npm install birthsjs</div>
            </code>
          </pre>
        </Stack>
      </Stack>
    </>
  );
}
