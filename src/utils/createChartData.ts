import type { TikTokAnalytics } from "@src/types/Analytics";

export const createChartData = (data: TikTokAnalytics[]) => ({
  labels: data.map((item) => item.Date),
  datasets: [
    {
      label: "Video Views",
      data: data.map((item) => item["Video Views"]),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y",
    },
    {
      label: "Profile Views",
      data: data.map((item) => item["Profile Views"]),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
    {
      label: "Likes",
      data: data.map((item) => item.Likes),
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      yAxisID: "y1",
    },
    {
      label: "Comments",
      data: data.map((item) => item.Comments),
      borderColor: "rgb(153, 102, 255)",
      backgroundColor: "rgba(153, 102, 255, 0.5)",
      yAxisID: "y1",
    },
    {
      label: "Shares",
      data: data.map((item) => item.Shares),
      borderColor: "rgb(255, 159, 64)",
      backgroundColor: "rgba(255, 159, 64, 0.5)",
      yAxisID: "y1",
    },
  ],
});
