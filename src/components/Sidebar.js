import { Flex } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react'

export default function Sidebar() {

  const [isSmallerThan900] = useMediaQuery('(max-width: 767px)')

  return (
    <>
      <Flex
        display={isSmallerThan900 ? "none" : "block" }
        position="fixed"
        top="0"
        left="0"
        flexDir="column"
        borderEnd="1px solid #ffffff20"
        justifyContent="space-between"
        boxShadow="0 4px 12px 0 rgba( 0, 0, 0, 0.05)"
        h="100vh"
        w="250px"
        bg="transparent"
      >
        <Flex p="5%" flexDir="column" alignItems="flex-start" as="nav">
          
        </Flex>
      </Flex>
    </>
  );
}
