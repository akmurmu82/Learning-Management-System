import React, { useEffect, useRef } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Flex, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavbarNew() {
  const navbarRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbarRef.current.style.backdropFilter = "blur(10px)";
        navbarRef.current.style.backgroundColor = "rgba(56, 56, 56, 0.2)";
      } else {
        navbarRef.current.style.backdropFilter = "blur(0px)";
        navbarRef.current.style.backgroundColor = "rgba(247, 247, 254, 1)";
      }
    });
  });

  return (
    <>
      <Flex
        zIndex="5"
        ref={navbarRef}
        bg="rgb(247, 247, 254)"
        width="100vw"
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        top={0}
        //   gap="2"
        height="60px"
        p={{ base: 5, md: 10, lg: 10 }}
      >
        <Box>
          <Link to="/">
            <Heading fontSize={{ base: 20, md: 25, lg: 35 }} fontWeight={700}>
              Learning App
            </Heading>
          </Link>
        </Box>

        <Link to="/account">
          <FaRegCircleUser
            fontSize={35}
            cursor="pointer"
            title="Login/SignUp"
          />
        </Link>
      </Flex>
    </>
  );
}

export default NavbarNew;
