"use client";

import { Heading, Box, Flex, Button } from "@yamada-ui/react";
import { signOut } from "next-auth/react";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import test from "@/static/images/SecretChat.png";

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <>
      <Flex
        justifyContent={"space-around"}
        align={"center"}
        margin={"60px 40px 40px 40px"}
        gap={4}>
        <Box>
          <Heading as={"h1"} fontSize={"2.5rem"}>
            You can get Secure Talkes!!
          </Heading>
        </Box>
        <Box>
          <Flex alignItems={"flex-end"} gap={4} justifyContent={"center"}>
            <Image src={test} alt="Secret Chat" height={50} width={50}></Image>
            {status === "authenticated" ? (
              <>
                <Button color={"primary.800"}>{session?.user.name}</Button>
                <Button onClick={() => signOut()} color={"primary"}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Button color={"primary"}>Sign In</Button>
            )}
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
