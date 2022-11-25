import {
  Box,
  Heading,
  Highlight,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

export default function Components() {
  const [isSmallerThan767] = useMediaQuery("(max-width: 767px)");

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
          <Heading fontSize="30px">Components</Heading>
          <Heading color="#ffffff95" fontWeight={400} fontSize="20px">
            Discover our components.
          </Heading>

          <Heading fontSize="20px" pt={8}>
            FormBirth
          </Heading>

          <Heading fontSize="16px" fontWeight={400}>
            <Highlight
              query={["form"]}
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
              Accepts all standard form attributes.
            </Highlight>
          </Heading>

          <Heading fontSize="22px" pt={5} fontWeight={400}>
            Import
          </Heading>
          <Stack direction="row" pt={4} id="section-import">
            <pre>
              <code>
                <div>
                  <span class="function">import</span> FormBirth{" "}
                  <span class="function">from</span>{" "}
                  <span class="string">'birthsjs'</span>{" "}
                </div>
              </code>
            </pre>
          </Stack>
          <Heading fontSize="22px" pt={5} fontWeight={400}>
            Usage
          </Heading>
          <Stack direction="row" pt={4} id="section-use">
            <pre>
              <code>
                <Stack mb={3}>
                  <span class="comment">import FormBirth from 'birthsjs' </span>
                </Stack>
                <div>
                  <span class="operator">{"<"}</span>
                  <span class="component">{"FormBirth"}</span>{" "}
                  <span class="operator">{">"}</span>{" "}
                  <span class="operator">{"<"}</span>
                  <span class="component">{"FormBirth"}</span>{" "}
                  <span class="operator">{"/>"}</span>
                  {"\n"}
                </div>
              </code>
            </pre>
          </Stack>
          <Heading fontSize="20px" pt={8}>
            InputBirth
          </Heading>

          <Heading fontSize="16px" fontWeight={400}>
            <Highlight
              query={["input"]}
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
              Accepts all standard input type date attributes.
            </Highlight>
          <UnorderedList pt={3}>
            <ListItem>Choose a size</ListItem>
            <ListItem>Choose a border radius</ListItem>
            <ListItem>Component enabled or disabled</ListItem>
            <ListItem>Validate dates of birth and legal age</ListItem>
          </UnorderedList>
          </Heading>

          <Heading fontSize="22px" pt={5} fontWeight={400}>
            Import
          </Heading>
          <Stack direction="row" pt={4} id="section-import">
            <pre>
              <code>
                <div>
                  <span class="function">import</span> InputBirth{" "}
                  <span class="function">from</span>{" "}
                  <span class="string">'birthsjs'</span>{" "}
                </div>
              </code>
            </pre>
          </Stack>
          <Heading fontSize="22px" pt={5} fontWeight={400}>
            Usage
          </Heading>
          <Stack direction="row" pt={4}>
            <pre>
              <code>
                <Stack mb={3}>
                  <span class="comment">
                    import InputBirth from 'birthsjs'{" "}
                  </span>
                </Stack>
                <div>
                  <span class="operator">{"<"}</span>
                  <span class="component">{"InputBirth"}</span>{" "}
                  <span class="operator">{">"}</span>{" "}
                  <span class="operator">{"<"}</span>
                  <span class="component">{"InputBirth"}</span>{" "}
                  <span class="operator">{"/>"}</span>
                  {"\n"}
                </div>
              </code>
            </pre>
          </Stack>
        <Stack
            display="flex"
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            pt={20}
            pb={20}
          >
             <Link href="/docs/installation">
              <Text color="#ffffff90" textAlign="start">
                Previous
              </Text>
              <Text color="#61DAFB" fontSize="18px" textAlign="end">
                Installation
              </Text>
            </Link>
            <Link href="/docs/howuse">
              <Text color="#ffffff90" textAlign="end">
                Next
              </Text>
              <Text color="#61DAFB" fontSize="18px" textAlign="end">
                How use
              </Text>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
