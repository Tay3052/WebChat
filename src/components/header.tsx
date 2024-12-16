"use client";

import { Heading, Box, Flex, Button, Text } from "@yamada-ui/react";
import { signOut } from "next-auth/react";
import React from "react";

export default function Header() {
  return (
    <>
      <Flex justifyContent={"space-between"} margin={"60px 40px 40px 40px"}>
        <Box>
          <Text opacity={0}>Sign out</Text>
        </Box>
        <Box>
          <Heading as={"h1"} fontSize={"2.5rem"}>
            You get Secure Talkes to Anyone!!
          </Heading>
        </Box>
        <Box>
          <Button onClick={() => signOut()} color={"primary"}>
            Sign Out
          </Button>
        </Box>
      </Flex>
    </>
  );
}
