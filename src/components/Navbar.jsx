import React, { useState, useEffect, useRef, useContext } from "react";
// import { path } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Flex,
  Text,
  Button,
  CardBody,
  Heading,
  Stack,
  Card,
  HStack,
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { Search2Icon, HamburgerIcon } from "@chakra-ui/icons";
// import { SidepanelContext } from "../Context/AuthContext";

import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";

// import { Search2Icon } from "@chakra-ui/icons";
import {AuthContext} from "../Context/AuthContext.jsx"

import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from "../helpers/localStorageHelper.js";
export default function Navbar() {
  const { isSidepanelOpen, toggleSidepanel } = useContext(AuthContext);
  const { isAuthenticated, toggleIsAuthenticated } = useContext(AuthContext);
  let navRef = useRef();

  const navigate = useNavigate();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    toggleIsAuthenticated(!isAuthenticated);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  const SetInputLabel = ({ inputLabel }) => {
    return (
      <>
        <FormLabel size="sm" fontWeight={500}>
          {inputLabel}
        </FormLabel>
      </>
    );
  };

  const SetLastGreenBTN = ({ lastGreenBTN }) => {
    return (
      <>
        <Button
          borderRadius={20}
          bg="#2da44e"
          color="white"
          size="sm"
          h="40px"
          mt="10px"
          _hover={{ bg: "#2c974b" }}
          _active={{ bg: "#298e46" }}
          onClick={handleSubmit}
        >
          {lastGreenBTN}
        </Button>
      </>
    );
  };

  const GeneralInputBox = ({ type }) => {
    return (
      <>
        <Input
          type={type}
          bg="white"
          bordercolor="#d8dee4"
          size="sm"
          w="full"
          h="40px"
          mt="5px"
          outlineColor="#4A55A2"
          borderRadius={20}
          color="#4A55A2"
          p="4"
          fontWeight={600}
          // onChange={handleInputChange}
        />
      </>
    );
  };

  const LoginPopup = () => {
    return (
      <>
        <Popover>
          <PopoverTrigger>
            <Button
              bg="#4385db"
              color="white"
              mt="10px"
              _hover={{ bg: "#3652AD" }}
              _active={{ bg: "#3468C0" }}
            >
              Login
            </Button>
          </PopoverTrigger>
          <PopoverContent
            px={10}
            py={5}
            color="black"
            bg="#d4d4fd"
            w="max-content"
            h="350px"
            m="auto"
            borderRadius={5}
          >
            <PopoverHeader fontWeight="bold" fontSize="lg">
              Login Popup
            </PopoverHeader>
            <PopoverBody margin="auto">
              <Card
                bg="#d4d4fd"
                variant="outline"
                bordercolor="#d8dee4"
                w="300px"
              >
                <CardBody>
                  <form onSubmit={handleSubmit}>
                    <Stack>
                      <FormControl>
                        <SetInputLabel inputLabel="Username or email address" />

                        <GeneralInputBox
                          type="text"
                          // onChange={handleInputChange}
                        />
                      </FormControl>
                      <FormControl>
                        <HStack display="flex" justifyContent="space-between">
                          <SetInputLabel inputLabel="Password" />
                          <Button
                            as="a"
                            href="/"
                            variant="link"
                            size="xs"
                            color="#0969da"
                            fontWeight={500}
                          >
                            Forget Password?
                          </Button>
                        </HStack>
                        <GeneralInputBox
                          type="password"
                          // onChange={handleInputChange}
                        />
                      </FormControl>
                      <SetLastGreenBTN
                        lastGreenBTN="Login"
                        onClick={handleSubmit}
                      />
                    </Stack>
                  </form>
                </CardBody>
              </Card>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </>
    );
  };
  const SignUpPopup = () => {
    return (
      <>
        <Popover>
          <PopoverTrigger>
            <Button
              bg="#4385db"
              color="white"
              mt="10px"
              _hover={{ bg: "#3652AD" }}
              _active={{ bg: "#3468C0" }}
            >
              SignUp
            </Button>
          </PopoverTrigger>
          <PopoverContent
            px={10}
            py={5}
            color="black"
            bg="#d4d4fd"
            w="max-content"
            h="350px"
            m="auto"
            borderRadius={5}
          >
            <PopoverHeader fontWeight="bold" fontSize="lg">
              SignUp Popup
            </PopoverHeader>
            <PopoverBody margin="auto">
              <Card
                bg="#d4d4fd"
                variant="outline"
                bordercolor="#d8dee4"
                w="300px"
              >
                <CardBody>
                  <form onSubmit={handleSubmit}>
                    <Stack>
                      <FormControl>
                        <SetInputLabel inputLabel="Email Address" />

                        <GeneralInputBox
                          type="email"
                          // onChange={handleInputChange}
                        />
                      </FormControl>
                      <FormControl>
                        <SetInputLabel inputLabel="Full Name" />

                        <GeneralInputBox
                          type="text"
                          // onChange={handleInputChange}
                        />
                      </FormControl>
                      <FormControl>
                        <SetInputLabel inputLabel="Set Password" />

                        <GeneralInputBox
                          type="password"
                          // onChange={handleInputChange}
                        />
                      </FormControl>
                      <SetLastGreenBTN
                        lastGreenBTN="SignUp"
                        onClick={handleSubmit}
                      />
                    </Stack>
                  </form>
                </CardBody>
              </Card>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </>
    );
  };

  // Transparency on Navbar
  console.log(navRef.current);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navRef.current.style.backdropFilter = "blur(10px)";
        navRef.current.style.backgroundColor = "rgba(56, 56, 56, 0.2)";
      } else {
        navRef.current.style.backdropFilter = "blur(0px)";
        navRef.current.style.backgroundColor = "rgba(255, 255, 255, 1)";
      }
    });
  }, []);

  return (
    <>
      <Flex
        ref={navRef}
        as="nav"
        bg="#f7f7fe"
        w="full"
        transition="all 0.2s"
        h="70px"
        position="fixed"
        top="0"
        left="0"
        zIndex="999"
        padding="1rem"
        px={{ base: 5, md: 20, lg: 20 }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          gap={5}
        >
          <Heading size="md">
            <Text onClick={toggleSidepanel} fontSize="3xl" fontWeight="bold">
              Your Logo
            </Text>
          </Heading>

          {isAuthenticated ? (
            navigate("/dashboard")
          ) : (
            <>
              <Flex
                ref={navRef}
                as="nav"
                bg="#f7f7fe"
                w="full"
                transition="all 0.2s"
                h="70px"
                position="fixed"
                top="0"
                left="0"
                zIndex="999"
                padding="1rem"
                px={{ base: 5, md: 20, lg: 20 }}
                alignItems="center"
                justifyContent="space-between"
              >
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  gap={5}
                >
                  <Heading size="md">
                    <Text fontSize="3xl" fontWeight="bold">
                      Your Logo
                    </Text>
                  </Heading>

                  {isAuthenticated ? (
                    <>
                      <HStack
                        spacing={20}
                        marginLeft={20}
                        display={{ base: "none", md: "none", lg: "block" }}
                      >
                        <InputGroup
                          padding={2}
                          display={"flex"}
                          alignItems="center"
                        >
                          <InputLeftElement pointerEvents="none" p={2}>
                            <Search2Icon
                              color="gray.300"
                              marginTop={3}
                              marginLeft={2}
                            />
                          </InputLeftElement>
                          <Input
                            width={"400px"}
                            background={"#f7f7f7"}
                            p={1.5}
                            variant="filled"
                            placeholder="Search Anything"
                            paddingLeft={8}
                            outline={"none"}
                            borderRadius={5}
                          />
                        </InputGroup>
                      </HStack>
                    </>
                  ) : null}
                </Box>

                {isAuthenticated ? (
                  <Text>Hello</Text>
                ) : (
                  <>
                    <Box
                      gap={3}
                      display={{ base: "none", md: "none", lg: "flex" }}
                    >
                      <LoginPopup />
                      <SignUpPopup />
                    </Box>
                  </>
                )}

                <Menu display={{ base: "block", md: "none", lg: "none" }}>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                    display={{ base: "block", md: "none", lg: "none" }}
                    mr={5}
                  />
                  <MenuList
                    display={{ base: "flex", md: "none", lg: "none" }}
                    gap={3}
                    bg={"#f7f7febd"}
                    p={3}
                    borderRadius={6}
                  >
                    <LoginPopup />
                    <SignUpPopup />
                  </MenuList>
                </Menu>
              </Flex>
            </>
          )}
        </Box>
      </Flex>
    </>
  );
}
