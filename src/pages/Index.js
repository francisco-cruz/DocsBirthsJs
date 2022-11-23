// import HeaderIndex from "../components/HeaderIndex";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Heading,
  Stack,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import "../assets/styles/index.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import bgHero from "../assets/img/bg_hero.png";

export default function Index() {
  const [isSmallerThan767] = useMediaQuery("(max-width: 767px)");
  return (
    <>
      <Header />
      <Stack position="relative">
        <Stack
          w="100%"
          h="100vh"
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
          <Stack
            direction="row"
            justifyContent="center"
            w="100%"
            spacing={4}
            pt={8}
            _before={{
              content: '""',
              bgImage: `url(${bgHero})`,
              bgSize: "contain",
              backgroundRepeat: "no-repeat",
              pos: "absolute",
              backgroundPosition: "center",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              opacity: 0.9,
              zIndex: -1000,
            }}
          >
            <Link href="/docs/installation">
              <Button rightIcon={<ArrowForwardIcon />} colorScheme="blue">
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
          <Stack w="100%" maxW="600px" pt={10} px={5}>
            <pre>
              <code>
                <div>npm install birthsjs</div>
              </code>
            </pre>
          </Stack>
        </Stack>
        <Footer></Footer>
      </Stack>
    </>
  );
}
