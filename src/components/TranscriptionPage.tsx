import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import PageCard from "../components/PageCard";

// Exercise: Audio Transcription Integration
// TODO:
// 1. Implement file upload handling
// 2. Add API integration with Gemini for audio transcription
// 3. Handle loading states and error scenarios
// 4. Add proper type checking for API response

export default function TranscriptionPage() {
  // TODO: Add necessary state management
  const [file, setFile] = useState<File | null>(null);

  // TODO: Implement file change handler
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    // Your code here
  };

  // TODO: Implement transcription logic
  const handleTranscribe = async () => {
    // Your code here
    // 1. Validate file existence
    // 2. Create FormData
    // 3. Make API call
    // 4. Handle response
  };

  return (
    <Layout>
      <PageCard
        pageName="Transcription Page"
        pageDesc="This page allows content creators to transcribe audio files to text."
      />
      <VStack spacing={4} mt={4}>
        <Box borderWidth="1px" borderRadius="lg" p={4} w="100%">
          <Heading as="h3" size="md" mb={2}>
            Upload Audio File
          </Heading>
          <Input
            type="file"
            accept=".wav,.mp3,.aiff,.aac,.ogg,.flac"
            onChange={handleFileChange}
            my={4}
          />
          <Button onClick={handleTranscribe} isDisabled={!file}>
            Transcribe
          </Button>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" p={4} w="100%">
          <Heading as="h3" size="md" mb={2}>
            Transcription Result
          </Heading>
          <Text>Transcription will appear here...</Text>
        </Box>
      </VStack>
    </Layout>
  );
}
