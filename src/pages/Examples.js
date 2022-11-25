import { Box, Heading, Link, ListItem, Stack, UnorderedList, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import '../assets/styles/index.css'
import Header from "../components/Header";

export default function Examples() {
  const [isSmallerThan767] = useMediaQuery("(max-width: 767px)");
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");

  return (
    <Box>
      <Header />
      <Stack
        w="100%"
        h="100%"
        px={isSmallerThan767 ? "16px" : "32px"}
        py="64px"
        position="relative"
      >
        <Stack
          minW="350px"
          w="100%"
          maxW="1000px"
          px="24px"
          pos="absolute"
          left="50%"
          transform="translatex(-50%)"
        >
          <Heading fontSize="30px">Examples</Heading>
          <Heading color="#ffffff95" fontWeight={400} fontSize="20px">
          Examples of how to use Births.
          </Heading>

          <Heading fontSize="20px" pt={8}>
            Example 01
          </Heading>
          <Heading fontSize="16px" color="#ffffff95" fontWeight={400}>
            Use default
          </Heading>
          <Stack direction="row" pt={4} id="section-use">
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
                  <span class="operator">{"/>"}</span>{"\n"} 
                  <span class="operator">{"<"}</span>
                  <span class="component">{"FormBirth"}</span>{" "}
                  <span class="operator">{"/>"}</span>{"\n"}
                  <span class="function">{")"}</span>{" "}
                </div>
              </code>
            </pre>
          </Stack>

          <Heading fontSize="20px" pt={8}>
            Example 02
          </Heading>
          <Heading fontSize="16px" color="#ffffff95" fontWeight={400}>
            Use with bootstrap class
          </Heading>
          <Stack direction="row" pt={4}  pb={20}  id="section-use">
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
                  <span class="function">{"("}</span>
                  {"\n"}{" "}
                  <span class="operator">{"<"}</span>
                  <span class="component">{"FormBirth"}</span>{" "}
                  <span class="operator">{">"}</span>
                  {"\n"}{" "}{" "}<span class="operator">{"<"}</span>
                  <span class="component">{"InputBirth"}</span> 
                  {"\n"}{" "}{" "}{" "}
                  <span class="type">{"legalAge"}</span>
                  <span class="operator">{"="}</span>
                  <span class="string">"16"</span> 
                  {"\n"}{" "}{" "}{" "}
                  <span class="type">{"class"}</span>
                  <span class="operator">{"="}</span>
                  <span class="string">"form-control-lg rounded-0"</span>
                  {"\n"}{" "}{" "}{" "}
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
        </Stack>
      </Stack>
      <Stack
        pt="64px"
        w="420px"
        display={isSmallerThan1000 ? "none" : "flex"}
        alignItems="center"
      >
        <Stack display="flex" flexDir="column" alignItems="start">
          <Heading fontSize="20px" mb={4}>
            Quick nav
          </Heading>
          <UnorderedList listStyleType="none">
            <ListItem color="#ffffff90" fontSize="14px" mb={2}>
              <Link href={"#section-instalation"}>Instalation</Link>
            </ListItem>
            <ListItem color="#ffffff90" fontSize="14px" mb={2}>
              <Link href={"#section-import"}>Import it</Link>
            </ListItem>
            <ListItem color="#ffffff90" fontSize="14px" mb={2}>
              <Link href={"#section-use"}>Use it</Link>
            </ListItem>
          </UnorderedList>
        </Stack>
      </Stack>
    </Box>
  );
}
