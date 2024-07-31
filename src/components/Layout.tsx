import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  HStack,
  Center,
  Container,
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
          <Heading size="md">Creator PRO</Heading>
        </Box>
        <Spacer />
        <HStack spacing={12}>
          <Link href="/scripting">
            <Heading size="sm">Scripting</Heading>
          </Link>
          <Link href="/transcription">
            <Heading size="sm">Transcription</Heading>
          </Link>
          <Link href="/thumbnail">
            <Heading size="sm">Thumbnail</Heading>
          </Link>
        </HStack>
      </Flex>
      <Container maxW="container.xl">
        <Box p={20}>{children}</Box>
      </Container>
    </Box>
  );
}
