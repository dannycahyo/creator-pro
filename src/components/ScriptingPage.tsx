import { Box, Textarea, Button, Center } from "@chakra-ui/react";
import { useState } from "react";
import Layout from "./Layout";
import MarkdownComponent from "./MarkdownComponent";
import PageCard from "./PageCard";

export default function ScriptingPage() {
  const [scriptInput, setScriptInput] = useState("");
  const [scriptResult, setScriptResult] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setScriptInput(e.target.value);
  };

  const handleGenerateScript = async () => {
    // Placeholder for OpenAI integration
    // Replace this with actual API call to OpenAI
    const result = await fetchOpenAIScript(scriptInput);
    setScriptResult(result);
  };

  const fetchOpenAIScript = async (input: string) => {
    // Simulate an API call to OpenAI
    return `### Generated script for: ${input}\n\nThis is a **sample** script generated for the input provided.`;
  };

  return (
    <Layout>
      <PageCard
        pageName="Scripting Page"
        pageDesc="This page allows content creators to generate scripts using
          OpenAI integration."
      />

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

      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <MarkdownComponent content={scriptResult} />
      </Box>
    </Layout>
  );
}
