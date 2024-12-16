"use client";

import { Box, Button, Center, Link } from "@yamada-ui/react";

export default function Home() {
  return (
    <>
      <Center alignItems={"center"}>
        <Button>
          <Link href="/pages/auth/signin">Start Here</Link>
        </Button>
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
