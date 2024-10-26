import { Box, Center, Heading, Text } from "@chakra-ui/react";
import Layout from "@src/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Center>
        <Box>
          <Heading size="lg">Welcome to Creator PRO</Heading>
          <Text mt={5}>
            Creator PRO is a platform that allows you to create and
            manage content for your audience
          </Text>
          <Box mt={10}>
            <Image
              alt="Content Creator Ilustration"
              src="/content_creator.svg"
              width={300}
              height={300}
            />
          </Box>
        </Box>
      </Center>
    </Layout>
  );
}
