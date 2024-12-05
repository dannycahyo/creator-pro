import {
  Box,
  Textarea,
  Button,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import Layout from "./Layout";
import MarkdownComponent from "./MarkdownComponent";
import PageCard from "./PageCard";

// Exercise: Script Generation with Gemini
// TODO:
// 1. Implement the API integration with Gemini
// 2. Add proper error handling
// 3. Implement loading states
// 4. Add type safety for API responses

export default function ScriptingPage() {
  const [scriptInput, setScriptInput] = useState("");

  // TODO: Implement script generation logic
  const handleGenerateScript = async () => {
    // Your code here
    // 1. Make API call to Gemini
    // 2. Handle and format response
    // 3. Update UI with result
  };

  return (
    <Layout>
      <PageCard
        pageName="Scripting Page"
        pageDesc="This page allows content creators to generate scripts using
          GEMINI API integration."
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
          onChange={(e) => setScriptInput(e.target.value)}
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
        <MarkdownComponent content="Your generated script will appear here..." />
      </Box>
    </Layout>
  );
}
