import { Divider, Flex, Icon, Text, VStack, useTheme } from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLiveTv } from "react-icons/md";
import { SlLayers } from "react-icons/sl";
import { IoClipboardOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoHelp } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { CiFlag1 } from "react-icons/ci";

export default function Sidepanel() {
  // const theme = useTheme();
  function Menus({ icon, title, dropdown }) {
    return (
      <Flex
        p={["0.7em"]}
        _hover={{ bgColor: "green", color: "tomato" }}
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        fontWeight="bold"
      >
        <Flex alignItems="center" justifyContent="flex-start">
          <Icon mr="1em" as={icon}></Icon>
          <Text>{title}</Text>
        </Flex>
        {dropdown ? <Icon as={FaAngleDown}></Icon> : null}
      </Flex>
    );
  }
  return (
    <>
      <VStack
        top="70px"
        overflowY="auto" // Set overflowY to "auto" to enable vertical scrolling
        w="20%"
        h="100vh" // Set a fixed height for the side panel
        position="fixed"
        left="0"
        bgColor="#d3d3d3"
        pb="1em"
      >
        <Menus icon={IoHomeOutline} title="Home" />
        <Menus icon={MdOutlineLiveTv} title="Live Stream" />
        <Menus icon={CiSearch} title="Explore" />
        <Menus icon={SlLayers} title="Category" dropdown={true} />
        <Menus icon={IoClipboardOutline} title="Tests" dropdown={true} />
        <Menus icon={CiHeart} title="Fevorites" />
        <Menus icon={IoDocumentTextOutline} title="Pages" dropdown={true} />
        
        <Divider size="100%" orientation="vertical" color="#333" />

        <Menus icon={CiSettings} title="Setting" />
        <Menus icon={IoHelp} title="Help" />
        <Menus icon={CiFlag1} title="Report History" />
        <Menus icon={MdOutlineFeedback} title="Send Feedback" />
        <Menus icon={CiFlag1} title="Report History" />
        <Menus icon={MdOutlineFeedback} title="Send Feedback" />
      </VStack>
    </>
  );
}
