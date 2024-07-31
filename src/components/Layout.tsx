import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  HStack,
  Text,
  Container,
  Divider,
} from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <Box>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        py={4}
        px={32}
      >
        <Box p="2">
          <Link href="/">
            <Text
              bgGradient="linear(to-l, teal.500, teal.300)"
              bgClip="text"
              fontSize="x-large"
              fontWeight="extrabold"
            >
              Creator PRO
            </Text>
          </Link>
          <Divider colorScheme="teal" />
        </Box>
        <Spacer />
        <HStack spacing={12}>
          <Link href="/scripting">
            <Heading size="sm">Scripting</Heading>
          </Link>
          <Link href="/transcription">
            <Heading size="sm">Transcription</Heading>
          </Link>
        </HStack>
      </Flex>
      <Container maxW="container.xl">
        <Box p={20}>{children}</Box>
      </Container>
    </Box>
  );
}
