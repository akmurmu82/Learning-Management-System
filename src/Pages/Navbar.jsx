import React from "react";

export default function Navbar() {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="teal.500"
        color="white"
      >
        <Box>
          <Link href="#" fontSize="xl" fontWeight="bold">
            My Logo
          </Link>
        </Box>

        <Box display={{ base: "block", md: "none" }} mt={{ base: 4, md: 0 }}>
          <Button>Menu</Button>
        </Box>

        <Box
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
        >
          <Link href="#" mr={2}>
            Home
          </Link>
          <Link href="#" mr={2}>
            About
          </Link>
          <Link href="#" mr={2}>
            Services
          </Link>
          <Link href="#">Contact</Link>
        </Box>
      </Flex>
      );
    </>
  );
}
