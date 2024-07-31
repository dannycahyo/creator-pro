import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import Layout from "./Layout";
import PageCard from "./PageCard";

export default function TranscriptionPage() {
  const [file, setFile] = useState<File | null>(null);
  const [transcription, setTranscription] = useState<string>("");

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleTranscribe = async () => {
    if (!file) return;

    // Placeholder for transcription logic
    // Replace this with actual API call to transcribe the audio file
    const result = await transcribeAudio(file);
    setTranscription(result);
  };

  const transcribeAudio = async (file: File): Promise<string> => {
    // Simulate an API call to transcribe the audio file
    return `Transcription result for: ${file.name}\n\nThis is a sample transcription text.`;
  };

  return (
    <Layout>
      <PageCard
        pageName="Transcription Page"
        pageDesc="This page allows content creators to transcribe audio files to text."
      />
      <VStack spacing={4} mt={4} minW="2xl">
        <Box borderWidth="1px" borderRadius="lg" p={4} w="100%">
          <Heading as="h3" size="md" mb={2}>
            Upload Audio File
          </Heading>
          <Input
            type="file"
            accept=".mp3,.mp4,.mpeg,.mpga,.m4a,.wav,.webm"
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
          {transcription ? (
            transcription.split("\n\n").map((paragraph, index) => (
              <Text key={index} mb={2}>
                {paragraph}
              </Text>
            ))
          ) : (
            <Text>No transcription available.</Text>
          )}
        </Box>
      </VStack>
    </Layout>
  );
}
