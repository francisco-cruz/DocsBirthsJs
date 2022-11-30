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
          minH="100vh"
          px={isSmallerThan767 ? "24px" : "32px"}
          py="64px"
          position="relative"
          display="flex"
          flexDir="column"
          alignItems={isSmallerThan767 ? "start" : "center"}
        >
          <Heading fontSize={isSmallerThan767 ? "32px" : "56px"}>
            Validate birth dates
          </Heading>
          <Heading fontSize="22px" color="#ffffff95" fontWeight={400}>
            With Births it is possible to validate birth dates with just one
            component.
          </Heading>
          <Stack
            direction="row"
            justifyContent={isSmallerThan767 ? "start" : "center"}
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
              top: -500,
              right: 0,
              left: 0,
              bottom: 0,
              opacity: 0.9,
              zIndex: -1000,
            }}
          >
            <Link href="/docs/installation">
              <Button
                rightIcon={<ArrowForwardIcon />}
                bg="#61DAFB40"
                color="#61DAFB"
                _hover={{
                  bg: "#61DAFB50",
                }}
                _active={{
                  bg: "#61DAFB50",
                }}
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
                bg="tranparent"
                color="#ffffff95"
                _hover={{
                  bg: "#ffffff20",
                }}
                _active={{
                  bg: "#ffffff20",
                }}
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
          <Stack
            w="100%"
            alignItems={isSmallerThan767 ? "start" : "center"}
          >
          <Heading
              fontSize="24px"
              color="#ffffff"
              fontWeight={700}
              pt={20}
              >
                
                Use it
            </Heading>
          <Stack  w="100%" maxW="600px" pt={5}>
            <pre>
              <code>
                <Stack mb={3}>
                  <span class="comment">
                    import{"\n"}FormBirth,{"\n"}InputBirth{"\n"}from 'birthsjs'{" "}
                  </span>
                </Stack>
                <div>
                  <span class="var">{"const"}</span>{" "}
                  <span class="string">{"App"}</span>{" "}
                  <span class="operator">{"="}</span>{" "}
                  <span class="function">{"()"}</span>{" "}
                  <span class="operator">{"=>"}</span>{" "}
                  <span class="function">{"("}</span> {"\n"}{" "}
                  <span class="operator">{"<"}</span>
                  <span class="component">{"FormBirth"}</span>{" "}
                  <span class="operator">{">"}</span>
                  {"\n"}{" "}{" "}<span class="operator">{"<"}</span>
                  <span class="component">{"InputBirth"}</span> {"\n"}{" "}{" "}{" "}
                  <span class="type">{"size"}</span>
                  <span class="operator">{"="}</span>
                  <span class="string">"large"</span> {"\n"}{" "}{" "}{" "}
                  <span class="type">{"borderRadius"}</span>
                  <span class="operator">{"="}</span>
                  <span class="string">"5"</span> {"\n"}{" "}{" "}{" "}
                  <span class="type">{"disabled"}</span>
                  <span class="operator">{"="}</span>
                  <span class="string">"false"</span> 
                  {"\n"}{" "}{" "}{" "}
                  <span class="type">{"legalAge"}</span>
                  <span class="operator">{"="}</span>
                  <span class="string">"16"</span> 
                  {"\n"}{" "}{" "}
                  <span class="operator">{">"}</span>
                  {"\n"} {" "}
                  <span class="operator">{"<"}</span>
                  <span class="function">{"button"}</span>{" "}
                  <span class="type">{"type"}</span>
                  <span class="operator">{"="}</span>
                  <span class="string">"submit"</span>
                  <span class="operator">{">"}</span>
                  {"\n"} {" "} {" "}
                  Send
                  {"\n"}{" "}{" "}
                  <span class="operator">{"<"}</span>
                  <span class="function">{"button"}</span>{" "}
                  <span class="operator">{">"}</span>
                  {"\n"}{" "} 
                  <span class="operator">{"<"}</span>
                  <span class="component">{"InputBirth"}</span>{" "}
                  <span class="operator">{"/>"}</span>
                  {"\n"} 
                  <span class="operator">{"<"}</span>
                  <span class="component">{"FormBirth"}</span>{" "}
                  <span class="operator">{"/>"}</span>
                  {"\n"}
                  <span class="function">{")"}</span>{" "}
                </div>
              </code>
            </pre>
          </Stack>
            <Heading
              fontSize="24px"
              color="#ffffff"
              fontWeight={700}
              pt={20}
              textAlign={isSmallerThan767 ? "start" : "center"}
            >
              How validation works?
            </Heading>
            <Stack w="100%" maxW="600px" pt={5}>
              <pre>
                <code>
                  <div>
                    <span class="comment"># Value passed as parameter</span>
                    {"\n"}
                    <span class="var">const</span> legalAge{" "}
                    <span class="operator">=</span>{" "}
                    <span class="number">16</span>
                    {"\n"}
                    <span class="comment"># Age passed in the field</span>
                    {"\n"}
                    <span class="var">const</span> age{" "}
                    <span class="operator">=</span>{" "}
                    <span class="number">14</span>
                    {"\n"}
                    <span class="function">{"if ("}</span>{" "}
                    <span class="string">age</span>{" "}
                    <span class="operator">{"<"}</span>{" "}
                    <span class="string">legalAge</span>{" "}
                    <span class="function">{")"}</span>
                    {"\n"} <span class="function">{"return "}</span>
                    “Prohibited minors!”
                  </div>
                </code>
              </pre>
            </Stack>
          </Stack>
        </Stack>
        <Footer />
      </Stack>
    </>
  );
}
