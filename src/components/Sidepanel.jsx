import { Divider, Flex, Icon, Text, VStack } from "@chakra-ui/react";
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
import { FaAngleUp } from "react-icons/fa6";
import { CiFlag1 } from "react-icons/ci";
import { useContext, useState } from "react";
import { SidepanelContext } from "../Context/AuthContext";

export default function Sidepanel() {
  const { isSidepanelOpen } = useContext(SidepanelContext);
  console.log(isSidepanelOpen);

  function Menus({ icon, title, links }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return (
      <>
        <VStack
          w="100%"
          alignItems="flex-start"
          justifyContent="space-between"
          fontWeight="bold"
          bgColor={isDropdownOpen ? "green.100" : ""}
        >
          <Flex
            _hover={{ bgColor: "green.200", color: "tomato" }}
            w="100%"
            p={["0.7em"]}
            justifyContent="space-between"
            alignItems="center"
            onClick={links && links.length > 0 && handleDropdownToggle}
            cursor="pointer"
          >
            <Flex alignItems="center">
              <Icon mr="1em" as={icon}></Icon>
              <Text>{title}</Text>
            </Flex>
            {links && links.length > 0 && !isDropdownOpen && (
              <Icon as={FaAngleDown}></Icon>
            )}
            {links && links.length > 0 && isDropdownOpen && (
              <Icon as={FaAngleUp}></Icon>
            )}
          </Flex>
          {isDropdownOpen &&
            links &&
            links.map((link, index) => (
              <Flex
                key={index}
                p={["0.7em"]}
                _hover={{ bgColor: "green.200", color: "tomato" }}
                w="100%"
                alignItems="center"
                justifyContent="space-between"
                fontWeight="bold"
              >
                <Text pl="3em">{link}</Text>
              </Flex>
            ))}
        </VStack>
      </>
    );
  }
  return (
    <>
      <VStack
        top="70px"
        transition="all 0.3s"
        overflowY="auto" // Set overflowY to "auto" to enable vertical scrolling
        w={isSidepanelOpen?"20%":"0"}
        h="100vh" // Set a fixed height for the side panel
        position="fixed"
        left="0"
        bgColor="#d3d3d3"
        pb="1em"
      >
        <Menus icon={IoHomeOutline} title="Home" />
        <Menus icon={MdOutlineLiveTv} title="Live Stream" />
        <Menus icon={CiSearch} title="Explore" />
        <Menus
          icon={SlLayers}
          title="Category"
          dropdown={true}
          links={[
            "Develooment",
            "Design",
            "Music",
            "Teaching & Academic",
            "Personal Development",
            "Office Productivity",
          ]}
        />
        <Menus
          icon={IoClipboardOutline}
          title="Tests"
          dropdown={true}
          links={[
            "Certification Center",
            "Certificatin Fill Form",
            "Test View",
            "Test Result",
            "My Certificatioon",
          ]}
        />
        <Menus icon={CiHeart} title="Fevorites" />
        <Menus
          icon={IoDocumentTextOutline}
          title="Pages"
          dropdown={true}
          links={[
            "About",
            "Sign In",
            "Sign Up",
            "Sign Up Steps",
            "Paid Membership",
            "Course Detail View",
            "Career",
            "Thank You",
            "Our Blog",
          ]}
        />

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
