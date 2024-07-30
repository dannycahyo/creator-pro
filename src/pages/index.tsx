import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container centerContent>
      <Box pt={20}>
        <Heading>Hello World</Heading>
        <Text>
          This is a Next.js app with Chakra UI and TypeScript
        </Text>
      </Box>
    </Container>
  );
}
