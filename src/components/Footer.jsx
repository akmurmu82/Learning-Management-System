import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";

export default function Footer() {
  return (
    <>
      <Flex justifyContent={"center"} p={10} background={"#fff"}>
        <Box display={"flex"} gap={5} p={10}>
          <EmailIcon fontSize={25} />
          <EmailIcon fontSize={25} />
          <EmailIcon fontSize={25} />
          <EmailIcon fontSize={25} />
          <EmailIcon fontSize={25} />
        </Box>
      </Flex>

      <Box paddingBottom={"100px"} background={"#fff"}>
        <Flex
          justifyContent={"center"}
          gap={20}
          p={10}
          borderTop={"1px solid #bbb"}
          borderBottom={"1px solid #bbb"}
        >
          <Text>Contact US</Text>
          <Text>Help + Feedback</Text>
          <Text>Privacy</Text>
          <Text>T&Cs</Text>
          <Text>About</Text>
        </Flex>
        <Text textAlign={"center"} marginTop={20}>
          LearningManagement ©2024 | All Rights Reserved
        </Text>
      </Box>
    </>
  );
}
