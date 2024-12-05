import { useState } from "react";
import {
  Box,
  Button,
  Select,
  Input,
  VStack,
  Heading,
  useToast,
  Skeleton,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import PageCard from "../components/PageCard";
import { Line } from "react-chartjs-2";
import { TikTokAnalytics } from "@src/types/Analytics";
import MarkdownComponent from "./MarkdownComponent";
import { createChartData } from "@src/utils/createChartData";

const chartOptions = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "TikTok Performance Metrics",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

export default function AnalyticsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [range, setRange] = useState<string>("7 days");
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string>("");
  const [chartData, setChartData] = useState<TikTokAnalytics[]>([]);
  const toast = useToast();

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setIsLoading(true);

    const formData = new FormData();
    formData.append("csvFile", file);
    formData.append("range", range);

    try {
      const response = await fetch("/api/analytics", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to analyze data");

      const data = await response.json();
      setAnalysis(data.analysis);
      setChartData(data.chartData);
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to analyze data",
        status: "error",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <PageCard
        pageName="Analytics"
        pageDesc="Analyze your TikTok content performance data and get AI-powered insights"
      />
      <VStack spacing={6} mt={4}>
        <Box borderWidth="1px" borderRadius="lg" p={4} w="100%">
          <VStack spacing={4} align="stretch">
            <Select
              value={range}
              onChange={(e) => setRange(e.target.value)}
            >
              <option value="7 days">Last 7 Days</option>
              <option value="30 days">Last 30 Days</option>
              <option value="90 days">Last 90 Days</option>
            </Select>

            <Input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
            />

            <Button
              onClick={handleAnalyze}
              isLoading={isLoading}
              isDisabled={!file}
            >
              Analyze Data
            </Button>
          </VStack>
        </Box>

        {chartData.length > 0 && (
          <Box borderWidth="1px" borderRadius="lg" p={4} w="100%">
            <Heading size="md" mb={4}>
              Performance Trends
            </Heading>
            <Line
              options={chartOptions}
              data={createChartData(chartData)}
            />
          </Box>
        )}

        {(analysis || isLoading) && (
          <Box borderWidth="1px" borderRadius="lg" p={4} w="100%">
            <Heading size="md" mb={4}>
              Analysis & Recommendations
            </Heading>
            {isLoading ? (
              <VStack spacing={4}>
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </VStack>
            ) : (
              <MarkdownComponent content={analysis} />
            )}
          </Box>
        )}
      </VStack>
    </Layout>
  );
}
