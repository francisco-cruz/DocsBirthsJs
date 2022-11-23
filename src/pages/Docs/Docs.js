import {
  Box,
  Heading,
  Highlight,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/index.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";

export default function Docs() {
  const [isSmallerThan767] = useMediaQuery("(max-width: 767px)");
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");

  return (
    <Box display={isSmallerThan767 ? "block" : "flex"}>
      <Navbar />
      <Sidebar />
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
          <Heading fontSize="30px">Installation</Heading>
          <Heading color="#ffffff95" fontWeight={400} fontSize="20px">
            How to install Births and get up and running.
          </Heading>

          <Heading fontSize="20px" pt={8}>
            Install Births
          </Heading>
          <Heading fontSize="16px" color="#ffffff95" fontWeight={400}>
            Install Births from your terminal via npm.
          </Heading>
          <Stack direction="row" pt={4} id="section-instalation">
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

          <Heading fontSize="20px" pt={8}>
            Import it
          </Heading>
          <Heading fontSize="16px" fontWeight={400}>
            <Highlight
              query={["FormBirth", "InputBirth"]}
              styles={{
                px: "2",
                py: ".8",
                rounded: "0",
                fontSize: "14px",
                bg: "#9261FB30",
                color: "#9261FB",
                mx: "2px",
              }}
            >
              Import FormBirth and InputBirth from birthsjs.
            </Highlight>
          </Heading>
          <Stack direction="row" pt={4} id="section-import">
            <pre>
              <code>
                <div>
                  <span class="function">import</span>
                  {"\n"}
                  FormBirth, {"\n"}
                  InputBirth{"\n"}
                  <span class="function">from</span>{" "}
                  <span class="string">'birthsjs'</span>{" "}
                </div>
              </code>
            </pre>
          </Stack>
          <Heading fontSize="20px" pt={8}>
            Use it
          </Heading>
          <Heading fontSize="16px" fontWeight={400}>
            <Highlight
              query={["FormBirth", "InputBirth"]}
              styles={{
                px: "2",
                py: ".8",
                rounded: "0",
                fontSize: "14px",
                bg: "#9261FB30",
                color: "#9261FB",
                mx: "2px",
              }}
            >
              Use the FormBirth function to create a form component and add the
              InputBirth to it.
            </Highlight>
          </Heading>
          <Stack direction="row" pt={4} id="section-use">
            <pre>
              <code>
                <div>
                  <span class="comment">
                    import{"\n"}FormBirth,{"\n"}InputBirth{"\n"}from 'birthsjs'{" "}
                  </span>
                </div>
                <div>
                  <span class="function">import</span> birthsjs{" "}
                  <span class="function">from</span>{" "}
                  <span class="string">'birthsjs'</span>{" "}
                </div>
              </code>
            </pre>
          </Stack>
          <Stack
            display="flex"
            flexDir="row"
            alignItems="center"
            justifyContent="end"
            pt={4}
            pb={8}
          >
            <Link to="/docs/components">
              <Text color="#ffffff90" textAlign="end">
                Previous
              </Text>
              <Text color="#61DAFB" fontSize="18px" textAlign="end">
                Components
              </Text>
            </Link>
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
              <Link to={"#section-import"}>Import it</Link>
            </ListItem>
            <ListItem color="#ffffff90" fontSize="14px" mb={2}>
              <Link to={"#section-use"}>Use it</Link>
            </ListItem>
          </UnorderedList>
        </Stack>
      </Stack>
    </Box>
  );
}
