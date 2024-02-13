import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import Sidepanel from "../components/Sidepanel";
// import { SidepanelContext } from "../Context/AuthContext";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";

function StudentDashboard() {
  const { isSidepanelOpen } = useContext(AuthContext);

  function LiveStreamCard({ imgSrc, name, isLive }) {
    return (
      <>
        <Box
          cursor="pointer"
          bgColor="#d3d3d3"
          borderRadius="2px"
          p="0.5em"
          w="50%"
        >
          <Box bgColor="#eeeeee" p="0.5em">
            <Image src={imgSrc}></Image>
            <Text>{name}</Text>
            <Text>{isLive}</Text>
          </Box>
        </Box>
      </>
    );
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = 10; // Total number of images
  const imagesToShow = 6; // Number of images to show at a time

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + imagesToShow) % totalImages);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - imagesToShow + totalImages) % totalImages
    );
  };

  // Featured Course:
  function FeatureCard() {
    return (
      <>
        <Box
          borderRadius="3px"
          bgColor="#fff"
          p="0.5em"
          border="1px solid #f1f1f1"
          cursor="pointer"
        >
          <Box>
            <Image src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg" />
          </Box>
          <Box p="0.5em">
            <Flex justifyContent="space-between">
              <Text fontSize="sm">Stats</Text>
              <Icon as={HiOutlineDotsVertical} />
            </Flex>
            <Text fontSize="xl">Complete Python Bootcamp</Text>
            <Text fontSize="sm">Web Development</Text>
            <Text fontSize="sm">Complete Python Bootcamp</Text>
            <Flex justifyContent="space-between">
              <Text>By Jane Doe</Text>
              <Text>$10</Text>
            </Flex>
          </Box>
        </Box>
      </>
    );
  }

  return (
    <Flex position="relative">
      <Sidepanel />
      <Box
        position="relative"
        transition="all 0.3s"
        left={isSidepanelOpen ? "20%" : "0"}
        top="70px"
        h="100vh"
        p="1em"
        w={isSidepanelOpen ? "80%" : "100%"}
        bgColor="#f7f7f7"
      >
        {/* Live Streams */}
        <Box p="2em 0">
          <HStack w="100%" justifyContent="space-between">
            <Text fontSize="xl">Live Streams</Text>
            <Text>See all</Text>
          </HStack>
          <Flex
            border="1px solid blue"
            w="100%"
            overflow="hidden"
            p="1em"
            mt="5px"
            gap="10px"
            position="relative"
          >
            <Button
              bgColor="#d3d3d3"
              p="0"
              border="1px solid"
              onClick={handlePrev}
              position="absolute"
              variant="outline"
              zIndex="3"
              left="0"
              bottom="0"
            >
              <Icon as={FaAngleLeft} />
            </Button>
            <Flex
              border="1px solid yellow"
              gap="1em"
              transition="transform 0.5s ease"
              transform={`translateX(-${currentIndex * (100 / imagesToShow)}%)`}
            >
              {Array.from({ length: totalImages }).map((_, index) => (
                <LiveStreamCard
                  key={index}
                  imgSrc="https://cdn-icons-png.flaticon.com/512/4305/4305692.png"
                  name="Amit"
                  status="Live"
                />
              ))}
            </Flex>
            <Button
              bgColor="#d3d3d3"
              p="0"
              border="1px solid"
              onClick={handlePrev}
              position="absolute"
              zIndex="3"
              right="0"
              variant="outline"
              bottom="0"
            >
              <Icon as={FaAngleRight} />
            </Button>
          </Flex>
        </Box>

        {/* Feature courses */}
        <Box p="2em 0">
          <Flex justifyContent="space-between">
            <Text fontSize="xl">Feature Courses</Text>
            <Text>See all</Text>
          </Flex>
          <Flex gap="10px">
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </Flex>
        </Box>
        <Box p="2em 0">
          <Flex justifyContent="space-between">
            <Text fontSize="xl">Feature Courses</Text>
            <Text>See all</Text>
          </Flex>
          <Flex gap="10px">
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default StudentDashboard;
