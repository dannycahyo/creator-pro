export interface TikTokAnalytics {
  Date: string;
  "Video Views": number;
  "Profile Views": number;
  Likes: number;
  Comments: number;
  Shares: number;
}

export interface AnalyticsResponse {
  analysis: string;
  chartData: TikTokAnalytics[];
}
