import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Flex
        justifyContent={"center"}
        background={"#fff"}
        p={{ base: 2, md: 5, lg: 5 }}
        pt={{ base: 2, md: 5, lg: 5 }}
      >
        <Box
          gap={{ base: 2, md: 5, lg: 5 }}
          p={{ base: 2, md: 5, lg: 5 }}
          pt={{ base: 2, md: 5, lg: 5 }}
          display={{ base: "block", md: "flex", lg: "flex" }}
        >
          <FaFacebookF
            fontSize={25}
            display={{ base: "block", md: "inline", lg: "inline" }}
          />
          <FaTwitter
            fontSize={25}
            display={{ base: "block", md: "inline", lg: "inline" }}
          />
          <FaInstagram
            fontSize={25}
            display={{ base: "block", md: "inline", lg: "inline" }}
          />
          <FaYoutube
            fontSize={25}
            display={{ base: "block", md: "inline", lg: "inline" }}
          />
          <FaLinkedin
            fontSize={25}
            display={{ base: "block", md: "inline", lg: "inline" }}
          />
        </Box>
      </Flex>

      <Box paddingBottom={"100px"} background={"#fff"}>
        <Box
          display={{ base: "block", md: "flex", lg: "flex" }}
          justifyContent={"center"}
          textAlign={"center"}
          gap={{ base: 5, md: 15, lg: 20 }}
          p={{ base: 2, md: 5, lg: 5 }}
          borderTop={"1px solid #bbb"}
          borderBottom={"1px solid #bbb"}
        >
          <Text>Contact US</Text>
          <Text>Help + Feedback</Text>
          <Text>Privacy</Text>
          <Text>T&Cs</Text>
          <Text>About</Text>
        </Box>
        <Text textAlign={"center"} marginTop={20}>
          LearningManagement ©2024 | All Rights Reserved
        </Text>
      </Box>
    </>
  );
}
