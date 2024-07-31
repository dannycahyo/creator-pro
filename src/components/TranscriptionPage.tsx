import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import PageCard from "../components/PageCard";

export default function TranscriptionPage() {
  const [file, setFile] = useState<File | null>(null);
  const [transcription, setTranscription] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleTranscribe = async () => {
    if (!file) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("audioFile", file);

    try {
      const response = await fetch("/api/transcripting", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to transcribe audio");
      }

      const data = await response.json();
      setTranscription(data.translatedText);
    } catch (error) {
      console.error("Error transcribing audio:", error);
      setTranscription("Error transcribing audio");
    } finally {
      setIsLoading(false);
    }
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
            accept=".wav,.mp3,.aiff,.aac,.ogg,.flac"
            onChange={handleFileChange}
            my={4}
          />
          <Button
            onClick={handleTranscribe}
            isDisabled={!file || isLoading}
          >
            {isLoading ? "Transcribing..." : "Transcribe"}
          </Button>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" p={4} w="100%">
          <Heading as="h3" size="md" mb={2}>
            Transcription Result
          </Heading>
          {isLoading ? (
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          ) : (
            <Text mb={2}>{transcription}</Text>
          )}
        </Box>
      </VStack>
    </Layout>
  );
}
