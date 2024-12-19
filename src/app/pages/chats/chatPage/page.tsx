"use client";

import { Text, Box, Center, Input, Button } from "@yamada-ui/react";

export default function ChatPage() {
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Send Message");
  };

  return (
    <>
      <Center>
        <Box>
          <Text fontSize={"2xl"}>Chat Page</Text>
        </Box>
      </Center>
      <Center>
        <Box>
          <form onSubmit={(e) => handleSendMessage(e)}>
            <Input
              type="textarea"
              placeholder="Type your message..."
              required
            />
            <Button type="submit">Send</Button>
          </form>
        </Box>
      </Center>

      <Center>
        <Box>
          <Text fontSize={"2xl"}>Messages</Text>
        </Box>
      </Center>

      <Center>
        <ul>
          <li></li>
        </ul>
      </Center>
    </>
  );
}
