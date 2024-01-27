import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Sidepanel from "../components/Sidepanel";

function StudentDashboard() {
  return (
    <Flex h="200vh">
      <Sidepanel />
      <Text>Student Dashboard</Text>
    </Flex>
  );
}

export default StudentDashboard;
