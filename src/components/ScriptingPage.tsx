import {
  Box,
  Textarea,
  Button,
  Center,
  Stack,
  Skeleton,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import Layout from "./Layout";
import MarkdownComponent from "./MarkdownComponent";
import PageCard from "./PageCard";

export default function ScriptingPage() {
  const [scriptInput, setScriptInput] = useState("");
  const [scriptResult, setScriptResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setScriptInput(e.target.value);
  };

  const handleGenerateScript = async () => {
    const result = await fetchOpenAIScript(scriptInput);
    setScriptResult(result);
  };

  const fetchOpenAIScript = async (input: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-script", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate script");
      }

      setIsLoading(false);

      const data = await response.json();
      return data.script;
    } catch (error) {
      console.error("Error fetching script:", error);
      setIsLoading(false);
      return "Error generating script. Please try again later.";
    }
  };

  return (
    <Layout>
      <PageCard
        pageName="Scripting Page"
        pageDesc="This page allows content creators to generate scripts using
          OpenAI integration."
      />

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
        <Box borderWidth="1px" borderRadius="lg" p={4}>
          <strong>Example Prompt 1:</strong>
          <p>
            Explain the concept of closures in JavaScript with
            examples.
          </p>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" p={4}>
          <strong>Example Prompt 2:</strong>
          <p>
            Describe the lifecycle methods in React and their use
            cases.
          </p>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" p={4}>
          <strong>Example Prompt 3:</strong>
          <p>
            Write a script for a tutorial on setting up a Node.js
            server.
          </p>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" p={4}>
          <strong>Example Prompt 4:</strong>
          <p>
            Discuss the benefits and drawbacks of using TypeScript in
            a project.
          </p>
        </Box>
      </SimpleGrid>

      <Box mb={4}>
        <Textarea
          placeholder="Enter your script idea here..."
          value={scriptInput}
          onChange={handleInputChange}
          mb={2}
        />
      </Box>

      <Center mb={4}>
        <Button
          width="full"
          colorScheme="teal"
          variant="outline"
          onClick={handleGenerateScript}
        >
          Generate Script
        </Button>
      </Center>

      <Box borderWidth="1px" borderRadius="lg" py={4} px={8}>
        {isLoading ? (
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        ) : (
          <MarkdownComponent content={scriptResult} />
        )}
      </Box>
    </Layout>
  );
}
