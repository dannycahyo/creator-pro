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
  IconButton,
  useDisclosure,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRef } from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<LayoutProps>) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const NavLinks = () => (
    <>
      <Link href="/scripting">
        <Heading size={["xs", "sm"]}>Scripting</Heading>
      </Link>
      <Link href="/transcription">
        <Heading size={["xs", "sm"]}>Transcription</Heading>
      </Link>
      <Link href="/analytics">
        <Heading size={["xs", "sm"]}>Analytics</Heading>
      </Link>
    </>
  );

  return (
    <Box>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        py={[2, 4]}
        px={[4, 8, 16, 32]}
      >
        <Box p={[1, 2]}>
          <Link href="/">
            <Text
              bgGradient="linear(to-l, teal.500, teal.300)"
              bgClip="text"
              fontSize={["lg", "xl"]}
              fontWeight="extrabold"
            >
              Creator PRO
            </Text>
          </Link>
          <Divider colorScheme="teal" />
        </Box>
        <Spacer />
        
        {/* Desktop Navigation */}
        <HStack spacing={[6, 8, 12]} display={["none", "none", "flex"]}>
          <NavLinks />
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          ref={btnRef}
          display={["flex", "flex", "none"]}
          onClick={onOpen}
          icon={<HamburgerIcon />}
          aria-label="Open menu"
          variant="ghost"
        />

        {/* Mobile Navigation Drawer */}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={8} align="start">
                <NavLinks />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>

      <Container maxW="container.xl" px={[4, 6, 8]}>
        <Box py={[8, 12, 20]} px={[4, 8, 20]}>
          {children}
        </Box>
      </Container>
    </Box>
  );
}
