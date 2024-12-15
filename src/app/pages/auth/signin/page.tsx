"use client";

import { signIn } from "next-auth/react";
import { Box, Button, Center, Input, Link, Text } from "@yamada-ui/react";

export default function Signin() {
  return (
    <>
      <Center alignItems={"center"}>
        <form onSubmit={() => signIn("credentials")}>
          <Input
            margin={"20px 0"}
            type="text"
            id="emali"
            placeholder="YOUR E-MAIL"
          />
          <Input
            type="password"
            id="password"
            placeholder="YOUR PASSWORD"></Input>
          <Button type="submit" color={"primary"} margin={"20px 0"}>
            Login
          </Button>
        </form>
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
