import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import '../assets/styles/index.css'
import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar"

export default function Docs() {
    return (
  <>
    <Navbar/>
    < Sidebar />
    <Flex w="100%" h="100%" bg="red">
      <Text>OIoioi</Text>
    </Flex>
  </>  
    )
}
