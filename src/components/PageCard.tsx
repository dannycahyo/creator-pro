import {
  Box,
  Heading,
  Divider,
  AbsoluteCenter,
  Text,
} from "@chakra-ui/react";

type PageCardProps = {
  pageName: string;
  pageDesc: string;
};

export default function PageCard({
  pageName,
  pageDesc,
}: Readonly<PageCardProps>) {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={40}>
      <Heading as="h3" size="lg" textAlign="center" mb={2}>
        {pageName}
      </Heading>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="teal" px="4">
          <Heading size="sm">Creator PRO</Heading>
        </AbsoluteCenter>
      </Box>
      <Text>{pageDesc}</Text>
    </Box>
  );
}
