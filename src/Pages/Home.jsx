import React, { useEffect } from "react";
import { Icon } from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";
import { SiTacobell } from "react-icons/si";
import { GrSchedules } from "react-icons/gr";
import { GrSchedule } from "react-icons/gr";
import { GiTeacher } from "react-icons/gi";
import { BiTask } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa6";
import { GiGlassCelebration } from "react-icons/gi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
// import Navbar from "../components/Navbar";

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
        p={1}
        color="#fff"
        w="100%"
        borderRadius="3px"
        bg={theme.bgColor.buttonBgLight}
        position="sticky"
        top="170px"
        // mb="150px"
        fontSize={["2xl", "4xl"]}
      >
        <Icon mr="10px" as={icon} />
        {title}
      </Text>
    );
  }

  // FeatureCard Component
  function FeaturesCard({ icon, title, desc }) {
    return (
      <Card
        transition="all 0.3s"
        _hover={{
          transform: "translate(0, -10px)",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        maxW="sm"
        w="100%"
        borderRadius="5px"
        bgColor="#fff"
        p={["5px", "20px"]}
      >
        <CardBody>
          <Icon fontSize={["6xl"]} as={icon} />
          <Stack spacing="3">
            <Heading size="md" as="b" color={theme.bgColor.primaryLight}>
              {title}
            </Heading>
            <Text>{desc}</Text>
          </Stack>
        </CardBody>
      </Card>
    );
  }

  // More Section cards
  function SectionCard({ imgSrc, title, desc }) {
    return (
      <>
        <Box borderRadius="10px" overflow="hidden" bgColor="#fff">
          <Box>
            <Image
              w="100%"
              opacity="1"
              transition="all 0.3s"
              _hover={{ opacity: 0.9 }}
              src="data:image/jpeg;base64,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"
            ></Image>
          </Box>
          <VStack>
            <Text fontSize="2xl">
              The ultimate guide to white noice for Studying - Find your Focus
            </Text>
            <Text fontSize="xl">
              <Icon as={CiClock2} /> Jan 12th, 2024
            </Text>
          </VStack>
        </Box>
      </>
    );
  }

  return (
    <>
      {/* <Navbar /> */}
      {/* Banner */}
      <Flex
        p={[0, , 50, 70]}
        direction={["column", , "row"]}
        justifyContent="space-between"
        gap={10}
        bgColor={theme.bgColor.primaryLight}
        mt="70px"
        pt="20px"
      >
        <VStack
          alignItems={["center", "center", "flex-start"]}
          textAlign={["center", , "left"]}
          color="#fff"
          lineHeight={1}
          p={2}
        >
          <Text fontSize="4xl" as="b">
            Never forget a class or assignment again.
          </Text>
          <Text
            fontSize="xl"
            mt="40px"
            lineHeight={1.5}
            textAlign={["center", , "left"]}
          >
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

        <Box w={["100%", "100%"]}>
          <Img src="https://cdn.dribbble.com/userupload/3898109/file/original-1e15ac48305378a87fc4997b2ad4c0ee.gif"></Img>
        </Box>
      </Flex>

      {/* Sticky session */}
      <Flex
        w={["100%", "70%"]}
        justifyContent="space-between"
        m="50px auto"
        p={1}
        gap={2}
        // border="1px solid"
        lineHeight={1}
      >
        <VStack
          w={["30%", "40%"]}
          justifyContent="space-between"
          pb="140px"
          // border="1px solid"
        >
          <StatsCard title="TASK" icon={MdSettings} />
          <StatsCard title="REMINDERS" icon={SiTacobell} />
          <StatsCard title="SCHEDULING" icon={GrSchedules} />
        </VStack>

        <VStack
          w={["70%", "40%"]}
          // border="1px solid"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box>
            <Text fontSize={["2xl", "4xl"]} lineHeight="1" mb="1em">
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
            <Text fontSize={["2xl", "4xl"]} lineHeight="1" mb="1em">
              Reminders
            </Text>
            <Text fontSize="xl">
              Stay on top of your workload by receiving notifications of
              upcoming classes, assignments or exams, as well as incomplete
              tasks, on all your devices.
            </Text>
          </Box>
          <Box>
            <Text fontSize={["2xl", "4xl"]} lineHeight="1" mb="1em">
              Homework planner and task tracker
            </Text>
            <Text fontSize="xl">
              Become a master of task management by tracking every single task
              with our online planner – no matter how big or small.
            </Text>
          </Box>
        </VStack>
      </Flex>

      {/* Quote */}
      <VStack w={["100%", "70%"]} m="50px auto" textAlign="center">
        <Text fontSize="xl">
          “Featuring a clean interface, MyStudyLife offers a comprehensive
          palette of schedules, timetables and personalized notifications that
          sync across multiple devices.”
        </Text>
        <Text fontSize="2xl">FORBES</Text>
      </VStack>

      {/* Explore Feature */}
      <Flex
        borderRadius="10px"
        justifyContent="space-between"
        gap={["1em", "2em"]}
        direction={["column", "row"]}
        bgColor="#fff"
        w={["90%", "70%"]}
        m="auto"
        p={["1em", "2em"]}
      >
        <VStack w={["100%", "50%"]}>
          <Text fontSize={["3xl", "2xl"]}>The ultimate study app</Text>
          <Text>
            The MyStudyLife student planner helps you keep track of all your
            classes, tasks, assignments and exams – anywhere, on any device.
          </Text>
          <Text>
            Whether you’re in middle school, high school or college
            MyStudyLife’s online school agenda will organize your school life
            for you for less stress, more productivity, and ultimately, better
            grades.
          </Text>
          <Button
            bgColor={theme.bgColor.buttonBgLight}
            color={theme.bgColor.buttonBgDark}
            alignItems="center"
            transition="all 0.3s"
            width={["12em", "13em"]}
            borderRadius="20px"
            _hover={{ width: ["13em", "15em"] }}
            justifyContent="space-between"
          >
            <Text>Explore our Features</Text>
            <Icon
              mr="10px"
              transition="all 0.3s"
              _hover={{ mr: "20px" }}
              as={MdOutlineKeyboardDoubleArrowRight}
            ></Icon>
          </Button>
        </VStack>
        <Box w={["100%", "50%"]} borderRadius="5px" overflow="hidden">
          <Image
            w="100%"
            src="https://mystudylife.com/wp-content/uploads/2023/04/pexels-charlotte-may-5965923-scaled-e1681294958200.jpg"
          ></Image>
        </Box>
      </Flex>

      {/* Card Section */}
      <VStack p={1} w={["100%", "70%"]} m="auto">
        <Text fontSize="3xl" textAlign="center" m="30px auto" as="b">
          Take control of your day with MyStudyLife
        </Text>
        <Grid
          // border="1px solid"

          templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={4}
        >
          <FeaturesCard
            title="Scheduling"
            desc="Stay on top of your studies. Organize tasks, set reminders, and get better grades, one day at a time."
            icon={GrSchedule}
          />
          <FeaturesCard
            title="Classes"
            desc="Track your class schedule on your phone or computer, online or offline, so that you always know where you’re meant to be."
            icon={GiTeacher}
          />
          <FeaturesCard
            title="Homework"
            desc="Say goodbye to last minute stress with MyStudyLife’s homework planner to make procrastination a thing of the past."
            icon={BiTask}
          />
          <FeaturesCard
            title="Exams"
            desc="We get it- student life can be busy. Start each day with the confidence that nothing important will be forgotten, so that you can stay focused and get more done."
            icon={FaUserGraduate}
          />
          <FeaturesCard
            title="Reminders"
            desc="Shift your focus back to your goals, knowing that MyStudyLife has your back with timely reminders that make success the main event of your day"
            icon={SiTacobell}
          />
          <FeaturesCard
            title="Coming Soon!"
            desc="MyStudyLife has lots of exciting changes and features in the works. Stay tuned!"
            icon={GiGlassCelebration}
          />
        </Grid>
      </VStack>

      {/* Banner-2 */}
      <Flex
        direction={["column", "row"]}
        justifyContent="space-around"
        gap={10}
        bgColor={theme.bgColor.primaryLight}
        mt="70px"
        p={["1em", "2em 13em"]}
      >
        <VStack
          alignItems={["center", "center", "flex-start"]}
          textAlign={["center", , "left"]}
          color="#fff"
          w={["100%", "50%"]}
          lineHeight={1}
          p={2}
        >
          <Text fontSize={["4xl", "4xl"]} as="b">
            Stay on track on all of your devices.
          </Text>
          <Text
            fontSize="xl"
            mt="20px"
            lineHeight={1.2}
            textAlign={["center", , "left"]}
            as="b"
          >
            All your tasks are automatically synced across all your devices,
            instantly.
          </Text>
        </VStack>
        <Box w={["100%", "50%"]}>
          <Img src="https://cdn.dribbble.com/userupload/3898109/file/original-1e15ac48305378a87fc4997b2ad4c0ee.gif"></Img>
        </Box>
      </Flex>

      {/* Get started */}
      <VStack
        w={["90%", "70%"]}
        m="auto"
        p="3em 0"
        textAlign={["center", , "left"]}
      >
        <Text fontSize={["3xl", "3xl"]} as="b">
          School can be hard. MyStudyLife makes it easier.
        </Text>
        <Text fontSize="xl" m="20px 0" lineHeight={1.2} as="b">
          Our easy-to-use online study planner app is available on the App
          Store, the Google Play Store and can be used on desktop. This means
          that you can use MyStudyLife anywhere and on any device.
        </Text>
        <Button
          bgColor={theme.bgColor.buttonBgLight}
          color={theme.bgColor.buttonBgDark}
          transition="all 0.3s"
          width="8em"
          borderRadius="20px"
          _hover={{ width: "10em" }}
          justifyContent="space-between"
        >
          <Text>Get Started</Text>
          <Icon
            mr="10px"
            transition="all 0.3s"
            _hover={{ mr: "20px" }}
            as={MdOutlineKeyboardDoubleArrowRight}
          ></Icon>
        </Button>
      </VStack>

      {/* More Features and sections */}
      <Box p="2em 0" w={["90%", "70%"]} m="auto" textAlign="center">
        <Text fontSize={["2xl", "3xl"]}>
          Discover more on the MyStudyLife blog
        </Text>
        <Text fontSize="xl">
          See how MyStudyLife can help organize your life.
        </Text>
        <Flex gap="2em" p="2em" direction={["column", "row"]}>
          <SectionCard />
          <SectionCard />
        </Flex>
      </Box>
    </>
  );
}

export default Home;
