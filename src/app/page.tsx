"use client";

import { Box, Button, Center, Link, Text } from "@yamada-ui/react";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <>
      <Center alignItems={"center"}>
        <Button>
          <Link href="/pages/auth/signin">Sign In from Here</Link>
        </Button>
      </Center>

      <Center>
        <Text margin={"20px 0"}>
          If you don&apos;t have an account, please{" "}
          <Link href="/auth/signup/signup">
            <span style={{ color: "#f08080" }}>Sign Up</span>
          </Link>
        </Text>
      </Center>

      <Center>
        <Box as={"p"} marginBottom={"10px"} opacity={0}>
          <Button type="button">
            <Link href={""}>SecretChatIsHere🤪</Link>
          </Button>
        </Box>
      </Center>
    </>
  );
}
