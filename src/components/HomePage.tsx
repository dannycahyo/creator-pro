import { Box, Center, Heading } from "@chakra-ui/react";
import Layout from "@src/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Center>
        <Box>
          <Heading size="lg">Welcome to Creator PRO</Heading>
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
