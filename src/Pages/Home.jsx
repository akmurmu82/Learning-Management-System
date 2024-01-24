import React, { useEffect, useState } from "react";
import { Icon } from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";
import { SiTacobell } from "react-icons/si";
import { GrSchedules } from "react-icons/gr";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  Heading,
  Image,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

function Home() {
  const theme = useTheme();
  useEffect(() => {}, []);

  // Stats
  function StatsCard({ title, icon }) {
    return (
      <Text
        p="0 20px"
        color="#fff"
        borderRadius="3px"
        bg={theme.bgColor.buttonBgDark}
        position="sticky"
        top="170px"
        fontSize="4xl"
      >
        <Icon mr="10px" as={icon} />
        {title}
      </Text>
    );
  }

  // FeatureCard Component
  function FeaturesCard() {
    return (
      <Card maxW="sm" w="100%">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
      </Card>
    );
  }

  return (
    <>
      <h1>HOMEPAGE</h1>
      {/* Banner */}
      <Flex
        p={[0, , 50, 70]}
        direction={["column", , "row"]}
        justifyContent="space-between"
        bgColor={theme.bgColor.primaryLight}
      >
        <VStack
          // border="1px solid #fff"
          alignItems={["center", "center", "flex-start"]}
          textAlign={["center", , "left"]}
          color="#fff"
        >
          <Text fontSize="4xl" as="b">
            Never forget a class or assignment again.
          </Text>
          <Text fontSize="2xl" textAlign={["center", , "left"]}>
            Unlock your potential and manage your classes, tasks and exams with
            MyStudyLife- the world's #1 student planner and school organizer
            app.
          </Text>
          <ButtonGroup gap="20px" mt="50px">
            <Button
              bgColor={theme.bgColor.buttonBgLight}
              color={theme.bgColor.buttonBgDark}
              transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
              _hover={{ transform: "scale(1.1)", transformOrigin: "left" }}
            >
              Get started for FREE!
            </Button>
            <Button
              color={theme.bgColor.buttonBgLight}
              bgColor={theme.bgColor.buttonBgDark}
              transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
              _hover={{ transform: "scale(1.1)", transformOrigin: "right" }}
            >
              Explore our COURSES!
            </Button>
          </ButtonGroup>
        </VStack>

        <Box border="1px solid red">
          <Img src="https://cdn.dribbble.com/userupload/3898109/file/original-1e15ac48305378a87fc4997b2ad4c0ee.gif"></Img>
        </Box>
      </Flex>

      {/* Sticky session */}
      <Flex
        w="70%"
        justifyContent="space-between"
        m="50px auto"
        // border="1px solid"
      >
        <VStack
          // w="40%"
          justifyContent="space-between"
          pb="140px"
          // border="1px solid"
        >
          <StatsCard title="TASK" icon={MdSettings} />
          <StatsCard title="REMINDERS" icon={SiTacobell} />
          <StatsCard title="SCHEDULING" icon={GrSchedules} />
        </VStack>
        <VStack w="40%" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Text fontSize="4xl" lineHeight="1" mb="1em">
              School planner and organizer
            </Text>
            <Text fontSize="xl">
              The MyStudyLife planner app supports rotation schedules, as well
              as traditional weekly schedules. MSL allows you to enter your
              school subjects, organize your workload, and enter information
              about your classes – all so you can effortlessly keep on track of
              your school calendar.
            </Text>
          </Box>
          <Box>
            <Text fontSize="4xl" lineHeight="1" mb="1em">
              Reminders
            </Text>
            <Text fontSize="xl">
              Stay on top of your workload by receiving notifications of
              upcoming classes, assignments or exams, as well as incomplete
              tasks, on all your devices.
            </Text>
          </Box>
          <Box>
            <Text fontSize="4xl" lineHeight="1" mb="1em">
              Homework planner and task tracker
            </Text>
            <Text fontSize="xl">
              Become a master of task management by tracking every single task
              with our online planner – no matter how big or small.
            </Text>
          </Box>
        </VStack>
      </Flex>

      <VStack w="70%" m="auto" textAlign="center">
        <Text>
          “Featuring a clean interface, MyStudyLife offers a comprehensive
          palette of schedules, timetables and personalized notifications that
          sync across multiple devices.”
        </Text>
        <Text>FORBES</Text>
      </VStack>

      {/* Card Section */}
      <Grid
        // border="1px solid"
        w="70%"
        m="auto"
        templateColumns={["repeat(3, 1fr)", "repeat(3, 1fr)"]}
        gap={4}
      >
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
      </Grid>
    </>
  );
}

export default Home;
