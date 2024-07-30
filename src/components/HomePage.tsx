import { Box, Heading } from "@chakra-ui/react";
import Layout from "@src/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Heading size="lg">Welcome to Creator PRO</Heading>
      <Box p={12}>
        <Image
          alt="Content Creator Ilustration"
          src="/content_creator.svg"
          width={300}
          height={300}
        />
      </Box>
    </Layout>
  );
}
