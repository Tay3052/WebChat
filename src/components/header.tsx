import { Center, Heading, Box } from "@yamada-ui/react";
import React from "react";

export default function Header() {
  return (
    <>
      <Center>
        <Box margin={"60px 10px 40px 10px"}>
          <Heading as={"h1"} fontSize={"2.5rem"}>
            You get Secure Talkes to Anyone!!
          </Heading>
        </Box>
      </Center>
    </>
  );
}
