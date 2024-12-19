"use client";

import { useSession } from "next-auth/react";
import { Box, Button, Center, Link, Text } from "@yamada-ui/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <>
        <Center>
          <Text>Loading...</Text>
        </Center>
      </>
    );
  }

  if (status === "authenticated" && session?.user) {
    return (
      <>
        <Center marginBottom={"40px"}>
          <Box>
            <Text fontSize={"2xl"}>
              Welcome dear my{" "}
              <span style={{ color: "red" }}>{session.user.name}</span>
            </Text>
          </Box>
        </Center>
        <Center>
          <Box>
            <Button>
              <Link href="/pages/chats/chatPage">Start to Chats</Link>
            </Button>
          </Box>
        </Center>
      </>
    );
  }

  return (
    <Center>
      <Button>
        <Link href="/pages/auth/signin">Start Here</Link>
      </Button>
    </Center>
  );
}
