import {
  Box,
  Heading,
  Highlight,
  ListItem,
  Stack,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/index.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";

export default function Docs() {
  const [isSmallerThan900] = useMediaQuery("(max-width: 767px)");
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");

  return (
    <Box display={isSmallerThan900 ? "block" : "flex"}>
      <Navbar />
      <Sidebar />
      <Stack
        w="100%"
        h="100%"
        px={isSmallerThan900 ? "16px" : "32px"}
        py="64px"
        position="relative"
      >
        <Stack
          id="section-instalation"
          minW="350px"
          w="100%"
          maxW="1000px"
          px="24px"
          pos="absolute"
          left="50%"
          transform="translatex(-50%)"
        >
          <Heading fontSize="30px">Instalation</Heading>
          <Heading color="#ffffff95" fontWeight={400} fontSize="20px">
            How to install Stitches and get up and running.
          </Heading>

          <Heading fontSize="20px">Install Births</Heading>
          <Heading fontSize="16px" color="#ffffff95" fontWeight={400}>
            Install Births from your terminal via npm.
          </Heading>
          <Stack direction="row">
            <pre>
              <code>
                <div>
                  <span class="comment"># With npm</span>
                </div>
                <div>
                  <span class="function">npm</span>{" "}
                  <span class="function">install</span> birthsjs
                </div>
              </code>
            </pre>
          </Stack>

          <Heading fontSize="20px">Import it</Heading>
          <Heading fontSize="16px" fontWeight={400}>
            <Highlight
              query={["FormBirth", "InputBirth"]}
              styles={{ px: "2", py: "1", rounded: "0", fontSize:"14px", bg: "#9261FB30", color:"#9261FB", mx:"2px" }}
            >
            Import FormBirth and InputBirth from birthsjs.
            </Highlight>
          </Heading>
          <Stack direction="row">
            <pre>
              <code>
                <div>
                  <span class="comment"># With npm</span>
                </div>
                <div>
                  <span class="function">import</span>{" "}
                  birthsjs{" "}
                  <span class="function">from</span>{" "}
                  <span class="string">'birthsjs'</span>{" "}
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
              <Link to={"#section-instalation"}>Instalation</Link>
            </ListItem>
            <ListItem color="#ffffff90" fontSize="14px" mb={2}>
              <Link>Import it</Link>
            </ListItem>
            <ListItem color="#ffffff90" fontSize="14px" mb={2}>
              <Link>Use it</Link>
            </ListItem>
          </UnorderedList>
        </Stack>
      </Stack>
    </Box>
  );
}
